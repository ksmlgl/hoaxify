package com.hoxify.ws.file.vm;

import com.hoxify.ws.file.FileAttachment;
import lombok.Data;

import java.lang.reflect.Field;

/**
 * @author KSM
 * @since 29.05.2021 14:34
 */
@Data
public class FileAttachmentVM {

	private String name;
	private  String fileType;

	public FileAttachmentVM(FileAttachment fileAttachment){
		this.name = fileAttachment.getName();
		this.fileType = fileAttachment.getFileType();

	}
}
