package com.hoxify.ws.auth;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoxify.ws.error.ApiError;
import com.hoxify.ws.shared.Views;
import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * @author KSM
 * @since 12.05.2021 00:14
 */
@RestController
public class AuthController {

	@Autowired
	UserRepository userRepository;

	@PostMapping("/api/1.0/auth")
	@JsonView(Views.Base.class)
	ResponseEntity handleAuthentication(@RequestHeader(name = "Authorization", required = false)String authorization){

		String base64encoded = authorization.split("Basic ")[1];
		String decoded = new String(Base64.getDecoder().decode(base64encoded));
		String[] parts = decoded.split(":"); //["user1", "P4ssword"]
		String username = parts[0];
		String password = parts[1];
		User inDB = userRepository.findByUsername(username);

		return ResponseEntity.ok(inDB);
	}

}
