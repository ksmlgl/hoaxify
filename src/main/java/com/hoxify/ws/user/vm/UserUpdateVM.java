package com.hoxify.ws.user.vm;

import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * @author KSM
 * @since 23.05.2021 15:50
 */
@Data
public class UserUpdateVM {

	@NotNull
	@Size(min = 4, max=255)
	private String displayName;

	private String image;
}
