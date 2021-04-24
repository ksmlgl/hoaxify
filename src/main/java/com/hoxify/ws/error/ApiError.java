package com.hoxify.ws.error;

import lombok.Data;

import java.util.Date;
import java.util.Map;

/**
 * @author KSM
 * @since 24.04.2021 16:23
 */
@Data
public class ApiError {

	private int status;
	private String message;
	private String path;
	private long timestamp = new Date().getTime();

	private Map<String, String> validationErrors;

	public ApiError(int status, String message, String path){
		this.status=status;
		this.message=message;
		this.path=path;
	}
}
