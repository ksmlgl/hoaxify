package com.hoxify.ws.hoax;

import com.hoxify.ws.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

/**
 * @author KSM
 * @since 26.05.2021 23:06
 */
public interface HoaxRepository extends JpaRepository<Hoax,Long>, JpaSpecificationExecutor<Hoax> {

	Page<Hoax> findByUser(User user, Pageable page);

	Page<Hoax> findByIdLessThan(long id, Pageable page);

	Page<Hoax> findByIdLessThanAndUser(long id, User user, Pageable page);

	long countByIdGreaterThan(long id);

	long countByIdGreaterThanAndUser(long id, User user);

	List<Hoax> findByIdGreaterThan(long id, Sort sort);

	List<Hoax> findByIdGreaterThanAndUser(long id, User user, Sort sort);
}
