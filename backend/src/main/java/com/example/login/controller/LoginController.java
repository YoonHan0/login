package com.example.login.controller;

import com.example.login.model.UserInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@RequestMapping()
public class LoginController {

    @GetMapping("/getUserInfo")
    public Object getUserInfo() {
        UserInfo userInfo = new UserInfo();
        // ##### 예제 데이터 반환 #####
        userInfo.setEmail("YoonHan0@naver.com");
        userInfo.setName("한영윤");

        return userInfo;
    }
}
