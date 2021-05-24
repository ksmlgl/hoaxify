package com.hoxify.ws.user;

import com.hoxify.ws.error.NotFoundException;
import com.hoxify.ws.user.vm.UserUpdateVM;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public void save(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}

	public Page<User> getUsers(Pageable page, User user) {
		if (user != null) {
			return userRepository.findByUsernameNot(user.getUsername(), page);
		}
		return userRepository.findAll(page);
	}

	public User getByUsername(String username) {
		User inDb = userRepository.findByUsername(username);
		if (inDb == null) {
			throw new NotFoundException();
		}
		return inDb;
	}

	public User updateUser(String username, UserUpdateVM updatedUser) {
		User inDB = getByUsername(username);
		inDB.setDisplayName(updatedUser.getDisplayName());
		if(updatedUser.getImage() != null){
			inDB.setImage(updatedUser.getImage());
		}
		return userRepository.save(inDB);
	}
}
