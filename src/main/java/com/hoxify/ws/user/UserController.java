package com.hoxify.ws.user;

import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.shared.GenericResponse;
import com.hoxify.ws.user.vm.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


/**
 * @author KSM
 * @since 18.04.2021 15:08
 */

@RestController
@RequestMapping("/api/1.0")
public class UserController {

	@Autowired
	UserService userService;

	@PostMapping(value = "/users", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@Valid @RequestBody User user){
		userService.save(user);
		return new GenericResponse("User created");

	}

	@GetMapping(value="/users")
	Page<UserVM> getUsers(Pageable page, @CurrentUser User user){
		return userService.getUsers(page, user).map(UserVM::new);
	}

	@GetMapping(value="/users/{username}")
	UserVM getUser(@PathVariable String username){
		User user = userService.getByUsername(username);
		return new UserVM(user);
	}


}
