package com.hoxify.ws.configuration;

import lombok.Data;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author KSM
 * @since 25.05.2021 21:39
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "hoaxify")
public class AppConfiguration {

	private String uploadPath;
}
