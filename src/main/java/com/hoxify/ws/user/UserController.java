package com.hoxify.ws.user;

import com.hoxify.ws.shared.GenericResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


/**
 * @author KSM
 * @since 18.04.2021 15:08
 */

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping(value = "/api/1.0/users", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@RequestBody User user){
		userService.save(user);
		return new GenericResponse("User created");

	}
}
