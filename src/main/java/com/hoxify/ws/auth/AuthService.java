package com.hoxify.ws.auth;

import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import com.hoxify.ws.user.UserService;
import com.hoxify.ws.user.vm.UserVM;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
}
