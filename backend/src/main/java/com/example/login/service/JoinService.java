package com.example.login.service;

import com.example.login.mapper.JoinMapper;
import com.example.login.model.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JoinService {

    @Autowired
    private JoinMapper mapper;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void joinProcess(UserInfo userInfo) throws Exception{

        // ~~ DB에 동일한 계정이 존재하는지 확인하는 로직이 추가되어야 함 ~~

        userInfo.setRole("ROLE_USER");
        userInfo.setPassword(bCryptPasswordEncoder.encode(userInfo.getPassword()));     // 비밀번호 암호화를 위한 로직 추가

        mapper.save(userInfo);
    }

}
