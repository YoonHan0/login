package com.example.login.service;

import com.example.login.dto.CustomUserDetails;
import com.example.login.mapper.JoinMapper;
import com.example.login.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private JoinMapper mapper;

    /*
    * - username 인자
    *   Spring Security가 검증을 위해서 username을 인자로 받음
    *   ?: 무조건 username 인자만 가능한가
    *   ?: UserDetailsService 인터페이스를 굳이 implements 해야하나?
    * */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserInfo userInfo = mapper.findByName(username);

        if(userInfo != null) {
            return new CustomUserDetails(userInfo);
        }
        return null;
    }
}
