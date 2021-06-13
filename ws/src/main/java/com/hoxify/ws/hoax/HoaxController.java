package com.hoxify.ws.hoax;

import com.hoxify.ws.hoax.vm.HoaxSubmitVM;
import com.hoxify.ws.hoax.vm.HoaxVM;
import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.shared.GenericResponse;
import com.hoxify.ws.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.CodeSigner;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author KSM
 * @since 26.05.2021 23:06
 */
@RestController
@RequestMapping("/api/1.0")
public class HoaxController {


	@Autowired
	HoaxService hoaxService;

	@PostMapping("/hoaxes")
	private GenericResponse saveHoax(@Valid @RequestBody HoaxSubmitVM hoaxSubmitVM, @CurrentUser User user){
		hoaxService.save(hoaxSubmitVM, user);

		return new GenericResponse("hoax is saved");
	}

	@GetMapping("/hoaxes")
	private Page<HoaxVM> getHoaxes(@PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page){
		return hoaxService.getHoaxes(page).map(HoaxVM::new);
	}

	@GetMapping("/hoaxes/{id}")
	private ResponseEntity<?> getHoaxesRelative(@PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page, @PathVariable Long id,
												@RequestParam(name="count", required = false, defaultValue = "false") boolean count,
												@RequestParam(name="direction", defaultValue = "before") String direction){
		if(count){
			long newHoaxCount = hoaxService.getNewHoaxesCount(id);
			Map<String, Long> response = new HashMap<>();
			response.put("count", newHoaxCount);
			return ResponseEntity.ok(response);
		}
		if(direction.equals("after")){
			List<Hoax> newHoaxes = hoaxService.getNewHoaxes(id, page.getSort());
			return ResponseEntity.ok(newHoaxes.stream().map(HoaxVM::new).collect(Collectors.toList()));
		}
		return ResponseEntity.ok(hoaxService.getOldHoaxes(id, page).map(HoaxVM::new));
	}

	@DeleteMapping("/hoaxes/{id}")
	private GenericResponse deleteHoax(@PathVariable long id, @CurrentUser User loggedInUser){
		hoaxService.delete(id, loggedInUser);
		return new GenericResponse("Hoax removed");
	}

}
