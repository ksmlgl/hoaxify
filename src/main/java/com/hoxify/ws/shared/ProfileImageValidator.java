package com.hoxify.ws.shared;

import com.hoxify.ws.file.FileService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

/**
 * @author KSM
 * @since 25.05.2021 23:42
 */
public class ProfileImageValidator implements ConstraintValidator<ProfileImage,String> {

	@Autowired
	FileService fileService;

	@Override
	public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
		if(s == null ||s.isEmpty()){
			return true;
		}
		String fileType = fileService.detectType(s);
		if(fileType.equals("iamge/jpeg") || fileType.equals("iamge/jpg") || fileType.equals("iamge/png")){
			return true;
		}
		return false;
	}
}
