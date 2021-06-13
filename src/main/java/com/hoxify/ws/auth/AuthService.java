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
import java.util.Optional;
import java.util.UUID;

/**
 * @author KSM
 * @since 10.06.2021 22:25
 */
@Service
public class AuthService {

	UserRepository userRepository;

	PasswordEncoder passwordEncoder;

	TokenRepository tokenRepository;

	public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenRepository tokenRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.tokenRepository = tokenRepository;
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
		String token = generateRandomToken();

		Token tokenEntity = new Token();
		tokenEntity.setToken(token);
		tokenEntity.setUser(inDB);
		tokenRepository.save(tokenEntity);

		AuthResponse response = new AuthResponse();
		response.setUser(user);
		response.setToken(token);
		return response;


	}

	@Transactional
	public UserDetails getUserDetails(String token) {

		Optional<Token> optionalToken = tokenRepository.findById(token);
		if(!optionalToken.isPresent()){
			return null;
		}
		return optionalToken.get().getUser();

	}

	private String generateRandomToken() {
		return UUID.randomUUID().toString().replaceAll("-", "");
	}
}
