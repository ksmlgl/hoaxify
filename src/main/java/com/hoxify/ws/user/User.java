package com.hoxify.ws.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonView;
import com.hoxify.ws.shared.Views;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

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

	@NotNull (message = "{hoaxify.constraint.username.NotNull.message}")
	@Size(min = 4, max=255)
	@UniqueUsername
	@JsonView(Views.Base.class)
	private String username;

	@NotNull
	@Size(min = 4, max=255)
	@JsonView(Views.Base.class)
	private String displayName;

	@NotNull
	@Size(min = 8, max=255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{hoaxify.constraint.password.pattern.message}")
	private String password;

	@JsonView(Views.Base.class)
	private String image;


}
