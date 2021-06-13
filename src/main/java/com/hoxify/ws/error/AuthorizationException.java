package com.hoxify.ws.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author KSM
 * @since 29.05.2021 18:28
 */
@ResponseStatus(HttpStatus.FORBIDDEN)
public class AuthorizationException extends RuntimeException{
}
