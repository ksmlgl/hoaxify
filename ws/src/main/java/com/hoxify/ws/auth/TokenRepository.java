package com.hoxify.ws.auth;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author KSM
 * @since 13.06.2021 13:58
 */
public interface TokenRepository extends JpaRepository<Token, String> {
}
