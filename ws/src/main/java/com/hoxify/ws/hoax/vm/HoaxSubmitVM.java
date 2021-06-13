package com.hoxify.ws.hoax.vm;

import lombok.Data;

import javax.persistence.Column;
import javax.validation.constraints.Size;

/**
 * @author KSM
 * @since 29.05.2021 14:15
 */
@Data
public class HoaxSubmitVM {

	@Size(min=1, max =1000)
	private String content;

	private long attachmentId;

}
