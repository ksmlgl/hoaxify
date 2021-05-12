package com.hoxify.ws.auth;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.shared.Views;
import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

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
	ResponseEntity handleAuthentication(@CurrentUser User user){

		return ResponseEntity.ok(user);
	}

}
