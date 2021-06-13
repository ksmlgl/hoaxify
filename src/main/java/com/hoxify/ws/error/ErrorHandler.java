package com.hoxify.ws.error;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.error.ErrorAttributeOptions;
import org.springframework.boot.web.servlet.error.ErrorAttributes;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import java.util.HashMap;
import java.util.List;
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
		Map<String, Object> errorAttributes = this.errorAttributes.getErrorAttributes(webRequest, ErrorAttributeOptions.of(ErrorAttributeOptions.Include.MESSAGE,
				ErrorAttributeOptions.Include.BINDING_ERRORS));
		String message = (String) errorAttributes.get("message");
		String path = (String) errorAttributes.get("path");
		int status = (Integer) errorAttributes.get("status");
		ApiError error = new ApiError(status, message, path);
		Map<String, String> validationErrors = new HashMap<>();
		if(errorAttributes.containsKey("errors")) {
			@SuppressWarnings("unchecked")
			List<FieldError> errors = (List<FieldError>) errorAttributes.get("errors");
			for (FieldError fieldError : errors) {
				validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
			}
			error.setValidationErrors(validationErrors);
		}
		return error;
	}

	@Override
	public String getErrorPath() {
		return "/error";
	}
}
