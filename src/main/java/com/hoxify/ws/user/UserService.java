package com.hoxify.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @author KSM
 * @since 18.04.2021 16:13
 */

@Service
public class UserService {

	UserRepository userRepository;

	PasswordEncoder passwordEncoder;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
		this.passwordEncoder = new BCryptPasswordEncoder();
	}

	public void save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}
}
