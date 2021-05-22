package com.hoxify.ws.user.vm;

import com.hoxify.ws.user.User;
import lombok.Data;

/**
 * @author KSM
 * @since 22.05.2021 16:48
 */
@Data
public class UserVM {

	private String username;
	private String displayName;
	private String image;

	public UserVM(User user){
		this.setUsername(user.getUsername());
		this.setDisplayName(user.getDisplayName());
		this.setImage(user.getImage());
	}
}
