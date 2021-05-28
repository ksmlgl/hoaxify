package com.hoxify.ws.hoax;

import com.hoxify.ws.hoax.vm.HoaxVM;
import com.hoxify.ws.shared.CurrentUser;
import com.hoxify.ws.shared.GenericResponse;
import com.hoxify.ws.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
	private GenericResponse saveHoax(@Valid @RequestBody Hoax hoax, @CurrentUser User user){
		hoaxService.save(hoax, user);

		return new GenericResponse("hoax is saved");
	}

	@GetMapping("/hoaxes")
	private Page<HoaxVM> getHoaxes(@PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page){
		return hoaxService.getHoaxes(page).map(HoaxVM::new);
	}

	@GetMapping("/hoaxes/{id}")
	private Page<HoaxVM> getHoaxesRelative(@PageableDefault(sort = {"id"}, direction = Sort.Direction.DESC) Pageable page, @PathVariable Long id){
		return hoaxService.getOldHoaxes(id, page).map(HoaxVM::new);
	}

}
