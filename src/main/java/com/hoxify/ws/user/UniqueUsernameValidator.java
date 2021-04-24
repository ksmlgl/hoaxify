package com.hoxify.ws.user;

import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @author KSM
 * @since 24.04.2021 18:55
 */
public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {

	@Autowired
	UserRepository userRepository;

	@Override
	public boolean isValid(String username, ConstraintValidatorContext constraintValidatorContext) {
		User user = userRepository.findByUsername(username);
		if(user != null){
			return false;
		}
		return true;
	}
}
