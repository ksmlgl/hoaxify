package com.hoxify.ws.user;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author KSM
 * @since 18.04.2021 15:17
 */
@Data
@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String username;
	private String displayName;
	private String password;


}
