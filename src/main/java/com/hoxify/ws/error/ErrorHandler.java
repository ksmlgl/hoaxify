package com.hoxify.ws.error;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.util.Map;

/**
 * @author KSM
 * @since 12.05.2021 02:16
 */
@RestController
public class ErrorHandler implements ErrorController {

	@Autowired
	private ErrorAttributes errorAttributes;

	@RequestMapping("/error")
	ApiError handleError(WebRequest webRequest){
		Map<String, Object> errorAttributes = this.errorAttributes.getErrorAttributes(webRequest, true);
		String message = (String) errorAttributes.get("message");
		String path = (String) errorAttributes.get("path");
		int status = (Integer) errorAttributes.get("status");
		return new ApiError(status, message, path);
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}
}
