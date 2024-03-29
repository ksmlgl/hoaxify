package com.hoxify.ws;

import com.hoxify.ws.hoax.Hoax;
import com.hoxify.ws.hoax.HoaxService;
import com.hoxify.ws.hoax.vm.HoaxSubmitVM;
import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class WsApplication {

	public static void main(String[] args) {
		SpringApplication.run(WsApplication.class, args);
	}

	@Bean
	@Profile("dev")
	CommandLineRunner createInitialUser(UserService userService, HoaxService hoaxService) {
		return (args) -> {
			for(int i = 1; i <= 25; i++) {
				try {
					userService.getByUsername("user" + i);
				} catch (Exception e) {
					User user = new User();
					user.setUsername("user" + i);
					user.setDisplayName("display" + i);
					user.setPassword("P4ssword");
					userService.save(user);
					for (int j = 1; j <= 20; j++) {
						HoaxSubmitVM hoax = new HoaxSubmitVM();
						hoax.setContent("hoax (" + j + ") from user (" + i + ")");
						hoaxService.save(hoax, user);
					}

				}
			}


		};
	}
}
