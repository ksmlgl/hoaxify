package com.hoxify.ws.user;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoxify.ws.error.ApiError;
import com.hoxify.ws.shared.GenericResponse;
import com.hoxify.ws.shared.Views;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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
	public GenericResponse createUser(@Valid @RequestBody User user){
		userService.save(user);
		return new GenericResponse("User created");

	}

	@GetMapping(value="/api/1.0/users")
	//@JsonView(Views.Base.class)
	Page<User> getUsers(Pageable page){
		return userService.getUsers(page);
	}
}
