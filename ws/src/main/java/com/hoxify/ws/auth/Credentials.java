package com.hoxify.ws.auth;

import lombok.Data;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author KSM
 * @since 10.06.2021 22:24
 */

@Data
public class Credentials {

	private String username;
	private String password;
}
