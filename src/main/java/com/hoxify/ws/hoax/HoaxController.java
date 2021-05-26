package com.hoxify.ws.hoax;

import com.hoxify.ws.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author KSM
 * @since 26.05.2021 23:06
 */
@RestController
public class HoaxController {


	@Autowired
	HoaxService hoaxService;

	@PostMapping("/api/1.0/hoaxes")
	private GenericResponse saveHoax(@RequestBody Hoax hoax){
		hoaxService.save(hoax);

		return new GenericResponse("hoax is saved");
	}

}
