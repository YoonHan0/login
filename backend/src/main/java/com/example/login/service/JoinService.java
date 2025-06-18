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

    public String joinProcess(UserInfo userInfo) throws Exception{

        // 체크하는 로직
        int count = mapper.countDuplicateId(userInfo);
        if(count > 0) {
            return "DUPLICATE_ID";
        }
        userInfo.setRole("ROLE_USER");
        userInfo.setPassword(bCryptPasswordEncoder.encode(userInfo.getPassword()));     // 비밀번호 암호화를 위한 로직 추가

        mapper.save(userInfo);
        return "OK";
    }

}
