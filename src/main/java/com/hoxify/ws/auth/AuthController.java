package com.hoxify.ws.auth;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import com.hoxify.ws.user.vm.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * @author KSM
 * @since 12.05.2021 00:14
 */
@RestController
public class AuthController {

	@Autowired
	AuthService authService;

	@PostMapping("/api/1.0/auth")
	AuthResponse handleAuthentication(@RequestBody Credentials credentials){
		return authService.authenticate(credentials);

	}

}
