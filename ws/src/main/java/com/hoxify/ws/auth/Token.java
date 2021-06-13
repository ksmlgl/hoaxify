package com.hoxify.ws.auth;

import com.hoxify.ws.user.User;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

/**
 * @author KSM
 * @since 13.06.2021 13:56
 */
@Entity
@Data
public class Token {

	@Id
	private String token;

	@ManyToOne
	private User user;

}
