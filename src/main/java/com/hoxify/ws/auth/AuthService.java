package com.hoxify.ws.auth;

import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import com.hoxify.ws.user.UserService;
import com.hoxify.ws.user.vm.UserVM;
import io.jsonwebtoken.*;
import org.hibernate.proxy.HibernateProxy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

/**
 * @author KSM
 * @since 10.06.2021 22:25
 */
@Service
public class AuthService {

	UserRepository userRepository;

	PasswordEncoder passwordEncoder;

	public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public AuthResponse authenticate(Credentials credentials) {
		User inDB = userRepository.findByUsername(credentials.getUsername());
		if (inDB == null) {
			throw new AuthenticationException();
		}

		boolean matches = passwordEncoder.matches(credentials.getPassword(), inDB.getPassword());

		if (!matches) {
			throw new AuthenticationException();
		}
		UserVM user = new UserVM(inDB);
		String token = Jwts.builder().setSubject("" + inDB.getId()).signWith(SignatureAlgorithm.HS512, "my-app-secret").compact();
		AuthResponse response = new AuthResponse();
		response.setUser(user);
		response.setToken(token);
		return response;


	}

	@Transactional
	public UserDetails getUserDetails(String token) {

		JwtParser jwtParser = Jwts.parser().setSigningKey("my-app-secret");
		try{
			jwtParser.parse(token);
			Claims body = jwtParser.parseClaimsJws(token).getBody();
			Long userId = Long.valueOf(body.getSubject());
			User user = userRepository.getOne(userId);
			return (User) ((HibernateProxy) user).getHibernateLazyInitializer().getImplementation();
		}catch (Exception exception){
			exception.printStackTrace();
		}

		return null;
	}
}
