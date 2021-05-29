package com.hoxify.ws.hoax;

import com.hoxify.ws.error.AuthorizationException;
import com.hoxify.ws.file.FileAttachment;
import com.hoxify.ws.file.FileAttachmentRepository;
import com.hoxify.ws.hoax.vm.HoaxSubmitVM;
import com.hoxify.ws.hoax.vm.HoaxVM;
import com.hoxify.ws.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * @author KSM
 * @since 26.05.2021 23:09
 */
@Service
public class HoaxService {

	HoaxRepository hoaxRepository;

	FileAttachmentRepository fileAttachmentRepository;

	private HoaxService(HoaxRepository hoaxRepository, FileAttachmentRepository fileAttachmentRepository) {
		this.hoaxRepository = hoaxRepository;
		this.fileAttachmentRepository = fileAttachmentRepository;
	}

	public void save(HoaxSubmitVM hoaxSubmitVM, User user) {
		Hoax hoax = new Hoax();
		hoax.setContent(hoaxSubmitVM.getContent());
		hoax.setTimestamp(new Date());
		hoax.setUser(user);
		hoaxRepository.save(hoax);
		Optional<FileAttachment> optionalFileAttachment = fileAttachmentRepository.findById(hoaxSubmitVM.getAttachmentId());
		if (optionalFileAttachment.isPresent()) {
			FileAttachment fileAttachment = optionalFileAttachment.get();
			fileAttachment.setHoax(hoax);
			fileAttachmentRepository.save(fileAttachment);
		}
	}

	public Page<Hoax> getHoaxes(Pageable page) {
		return hoaxRepository.findAll(page);
	}

	public Page<Hoax> getUserHoaxes(User user, Pageable page) {
		return hoaxRepository.findByUser(user, page);
	}

	public Page<Hoax> getOldHoaxes(Long id, Pageable page) {

		Specification<Hoax> spec = idLessThan(id);
		return hoaxRepository.findAll(spec, page);
	}

	public Page<Hoax> getOldHoaxesOfUser(User user, long id, Pageable page) {
		return hoaxRepository.findByIdLessThanAndUser(id, user, page);
	}

	public long getNewHoaxesCount(Long id) {
		return hoaxRepository.countByIdGreaterThan(id);

	}

	public long getNewHoaxesCountOfUser(long id, User user) {
		return hoaxRepository.countByIdGreaterThanAndUser(id, user);
	}

	public List<Hoax> getNewHoaxes(Long id, Sort sort) {
		return hoaxRepository.findByIdGreaterThan(id, sort);
	}

	public List<Hoax> getNewHoaxesOfUser(long id, User user, Sort sort) {
		return hoaxRepository.findByIdGreaterThanAndUser(id, user, sort);
	}

	private Specification<Hoax> idLessThan(long id) {
		return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.lessThan(root.get("id"), id);
	}

	public void delete(long id, User loggedInUser) {
		Optional<Hoax> optionalHoax = hoaxRepository.findById(id);
		if(!optionalHoax.isPresent()){
			throw new AuthorizationException();
		}
		Hoax hoax = optionalHoax.get();
		if(hoax.getUser().getId() != loggedInUser.getId()){
			throw new AuthorizationException();
		}

		hoaxRepository.deleteById(id);
	}
}
