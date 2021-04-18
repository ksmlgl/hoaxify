package com.hoxify.ws.user;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author KSM
 * @since 18.04.2021 15:58
 */
public interface UserRepository extends JpaRepository<User,Long> {
}
