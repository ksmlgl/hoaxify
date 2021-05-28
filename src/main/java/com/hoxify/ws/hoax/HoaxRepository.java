package com.hoxify.ws.hoax;

import com.hoxify.ws.user.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author KSM
 * @since 26.05.2021 23:06
 */
public interface HoaxRepository extends JpaRepository<Hoax,Long> {

	Page<Hoax> findByUser(User user, Pageable page);

	Page<Hoax> findByIdLessThan(long id, Pageable page);

	Page<Hoax> findByIdLessThanAndUser(long id, User user, Pageable page);
}
