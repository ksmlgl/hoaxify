package com.hoxify.ws.hoax;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;

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

	public void save(Hoax hoax) {
		hoax.setTimestamp(new Date());
		hoaxRepository.save(hoax);
	}

	public Page<Hoax> getHoaxes(Pageable page) {
		return hoaxRepository.findAll(page);
	}
}
