package com.hoxify.ws.hoax;

import com.hoxify.ws.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author KSM
 * @since 29.05.2021 18:33
 */
@Service
public class HoaxSecurityService {

	HoaxRepository hoaxRepository;

	public HoaxSecurityService(HoaxRepository hoaxRepository){
		this.hoaxRepository = hoaxRepository;
	}

	public boolean isAllowedToDelete(long hoaxId, User loggedInUser){
		Optional<Hoax> optionalHoax = hoaxRepository.findById(hoaxId);
		if(!optionalHoax.isPresent()){
			return false;
		}
		Hoax hoax = optionalHoax.get();
		if(hoax.getUser().getId() != loggedInUser.getId()){
			return false;
		}
		return true;
	}
}
