package com.hoxify.ws.auth;

import com.hoxify.ws.user.vm.UserVM;
import lombok.Data;

/**
 * @author KSM
 * @since 10.06.2021 22:26
 */
@Data
public class AuthResponse {

	private String token;

	private UserVM user;
}
