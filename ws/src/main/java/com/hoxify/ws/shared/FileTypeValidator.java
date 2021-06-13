package com.hoxify.ws.shared;

import com.hoxify.ws.file.FileService;
import org.hibernate.validator.constraintvalidation.HibernateConstraintValidatorContext;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author KSM
 * @since 25.05.2021 23:42
 */
public class FileTypeValidator implements ConstraintValidator<FileType, String> {

	@Autowired
	FileService fileService;

	String[] types;

	@Override
	public void initialize(FileType constraintAnnotation) {

		this.types = constraintAnnotation.types();
	}

	@Override
	public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
		if (s == null || s.isEmpty()) {
			return true;
		}
		String fileType = fileService.detectType(s);
		for(String supportedType : this.types){
			if(fileType.contains(supportedType)){
				return true;
			}
		}

		String supportedTypes = String.join(", ", this.types);
		constraintValidatorContext.disableDefaultConstraintViolation();
		HibernateConstraintValidatorContext unwrap = constraintValidatorContext.unwrap(HibernateConstraintValidatorContext.class);
		unwrap.addMessageParameter("types", supportedTypes);
		unwrap.buildConstraintViolationWithTemplate(constraintValidatorContext.getDefaultConstraintMessageTemplate()).addConstraintViolation();
		return false;
	}
}
