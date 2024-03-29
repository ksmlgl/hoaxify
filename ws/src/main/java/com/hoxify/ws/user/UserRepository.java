package com.hoxify.ws.user;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author KSM
 * @since 18.04.2021 15:58
 */
public interface UserRepository extends JpaRepository<User,Long> {

	User findByUsername(String username);

	Page<User> findByUsernameNot(String username, Pageable page);
}
