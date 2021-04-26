package com.hoxify.ws.user;

import javax.validation.Constraint;
import javax.validation.Payload;
import javax.validation.constraints.NotNull;
import java.lang.annotation.*;

/**
 * @author KSM
 * @since 24.04.2021 18:53
 */
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(
		validatedBy = {UniqueUsernameValidator.class}
)
public @interface UniqueUsername {

	String message() default "{hoaxify.constraint.username.uniqueusername.message}";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}
