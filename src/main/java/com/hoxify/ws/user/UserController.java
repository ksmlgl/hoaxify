package com.hoxify.ws.user;

import com.hoxify.ws.error.ApiError;
import com.hoxify.ws.hoax.Hoax;
import com.hoxify.ws.hoax.HoaxService;
import com.hoxify.ws.hoax.vm.HoaxVM;
import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.shared.GenericResponse;
import com.hoxify.ws.user.vm.UserUpdateVM;
import com.hoxify.ws.user.vm.UserVM;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * @author KSM
 * @since 18.04.2021 15:08
 */

@RestController
@RequestMapping("/api/1.0")
public class UserController {

	@Autowired
	UserService userService;

	@Autowired
	HoaxService hoaxService;

	@PostMapping(value = "/users", consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public GenericResponse createUser(@Valid @RequestBody User user) {
		userService.save(user);
		return new GenericResponse("User created");

	}

	@GetMapping(value = "/users")
	Page<UserVM> getUsers(Pageable page, @CurrentUser User user) {
		return userService.getUsers(page, user).map(UserVM::new);
	}

	@GetMapping(value = "/users/{username}")
	UserVM getUser(@PathVariable String username) {
		User user = userService.getByUsername(username);
		return new UserVM(user);
	}

	@PutMapping(value = "/users/{username}")
	@PreAuthorize("#username == principal.username")
	UserVM updateUser(@Valid @RequestBody UserUpdateVM updatedUser, @PathVariable String username) {
		User user = userService.updateUser(username, updatedUser);
		return new UserVM(user);
	}

	@GetMapping(value = "/users/{username}/hoaxes")
	Page<HoaxVM> getUserHoaxes(@PathVariable String username, @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page) {
		User user = userService.getByUsername(username);
		return hoaxService.getUserHoaxes(user, page).map(HoaxVM::new);
	}

	@GetMapping(value = "/users/{username}/hoaxes/{id}")
	ResponseEntity<?> getUserHoaxesRelative(@PathVariable String username, @PathVariable long id, @PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page,
											@RequestParam(name = "count", required = false, defaultValue = "false") boolean count,
											@RequestParam(name = "direction", defaultValue = "before") String direction) {
		User user = userService.getByUsername(username);
		if (count) {
			long newHoaxCount = hoaxService.getNewHoaxesCountOfUser(id, user);
			Map<String, Long> response = new HashMap<>();
			response.put("count", newHoaxCount);
			return ResponseEntity.ok(response);
		}
		if(direction.equals("after")){
			List<Hoax> newHoaxes = hoaxService.getNewHoaxesOfUser(id,user, page.getSort());
			return ResponseEntity.ok(newHoaxes.stream().map(HoaxVM::new).collect(Collectors.toList()));
		}
		return ResponseEntity.ok(hoaxService.getOldHoaxesOfUser(user, id, page).map(HoaxVM::new));
	}

	@DeleteMapping("/users/{username}")
	GenericResponse deleteUser(@PathVariable String username, @CurrentUser User loggedInUser){
		userService.deleteUser(username,loggedInUser);
		return new GenericResponse("User is removed");
	}

}
