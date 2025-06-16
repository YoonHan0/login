package com.example.login.service;

import com.example.login.entity.UserEntity;
import com.example.login.model.UserInfo;
import com.example.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class JoinService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public void joinProcess(UserInfo userInfo) {

        // DB에 동일한 계정이 존재하는지 확인하는 로직이 추가되어야 함

        UserEntity data = new UserEntity();

        data.setId(userInfo.getId());
        data.setPassword(bCryptPasswordEncoder.encode(userInfo.getPassword()));     // 비밀번호 암호화
        data.setName(userInfo.getName());
        data.setEmail(userInfo.getEmail());
        data.setRole("ROLE_USER");

        repository.save(data);
    }

}
