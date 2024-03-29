package com.hoxify.ws.shared;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author KSM
 * @since 25.05.2021 23:41
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
		validatedBy = {FileTypeValidator.class}
)
public @interface FileType {
	String message() default "{hoaxify.constraint.FileType.message}";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};

	String [] types();
}
