package com.hoxify.ws.configuration;

import com.hoxify.ws.user.User;
import com.hoxify.ws.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author KSM
 * @since 12.05.2021 01:29
 */
@Service
public class UserAuthService implements UserDetailsService {

	@Autowired
	UserRepository userRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User inDB = userRepository.findByUsername(username);
		if(inDB == null){
			throw new UsernameNotFoundException("User not found");
		}
		return new HoaxifyUserDetails(inDB);
	}
}
