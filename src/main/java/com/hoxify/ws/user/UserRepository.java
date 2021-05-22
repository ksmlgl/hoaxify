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

	@Query(value="Select u from User u")
	Page<UserProjection> getAllUsersProjection(Pageable page);
}
