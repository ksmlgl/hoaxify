package com.hoxify.ws.hoax.vm;

import com.hoxify.ws.file.FileAttachment;
import com.hoxify.ws.file.vm.FileAttachmentVM;
import com.hoxify.ws.hoax.Hoax;
import com.hoxify.ws.user.User;
import com.hoxify.ws.user.vm.UserVM;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.io.File;
import java.util.Date;

/**
 * @author KSM
 * @since 27.05.2021 22:24
 */
@Data
public class HoaxVM {

	private long id;

	private String content;

	private long timestamp;

	private UserVM user;

	private FileAttachmentVM fileAttachment;

	public HoaxVM(Hoax hoax) {
		this.setId(hoax.getId());
		this.setContent(hoax.getContent());
		this.setTimestamp(hoax.getTimestamp().getTime());
		this.setUser(new UserVM(hoax.getUser()));
		if(hoax.getFileAttachment() != null) {
			this.fileAttachment = new FileAttachmentVM(hoax.getFileAttachment());
		}
	}
}
