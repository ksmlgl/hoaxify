package com.hoxify.ws;

import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}

	@Bean
	CommandLineRunner createInitialUser(UserService userService) {
		return (args) -> {
			for(int i = 1; i <= 25; i++){
				User user = new User();
				user.setUsername("user"+i);
				user.setDisplayName("display"+i);
				user.setPassword("P4ssword");
				userService.save(user);
			}
		};
	}
}
