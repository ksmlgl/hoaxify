package com.hoxify.ws.hoax;

import com.hoxify.ws.hoax.vm.HoaxVM;
import com.hoxify.ws.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

/**
 * @author KSM
 * @since 26.05.2021 23:09
 */
@Service
public class HoaxService {

	HoaxRepository hoaxRepository;

	private HoaxService(HoaxRepository hoaxRepository){
		this.hoaxRepository = hoaxRepository;
	}

	public void save(Hoax hoax, User user) {
		hoax.setTimestamp(new Date());
		hoax.setUser(user);
		hoaxRepository.save(hoax);
	}

	public Page<Hoax> getHoaxes(Pageable page) {
		return hoaxRepository.findAll(page);
	}

	public Page<Hoax> getUserHoaxes(User user, Pageable page) {
		return hoaxRepository.findByUser(user, page);
	}

	public Page<Hoax> getOldHoaxes(Long id, Pageable page) {
		return hoaxRepository.findByIdLessThan(id, page);
	}

	public Page<Hoax> getOldHoaxesOfUser(User user, long id, Pageable page) {
		return hoaxRepository.findByIdLessThanAndUser(id,user,page);
	}
}
