package com.example.login.controller;

import com.example.login.model.ResponseInfo;
import com.example.login.model.UserInfo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
//@RequestMapping()
public class LoginController {

    @GetMapping("/")
    public Object getLogin() {
        ResponseInfo response = new ResponseInfo();
        response.setResultText("OK");               // 테스트용으로 OK 리턴

        return response;
    }

    @GetMapping("/getUserInfo")
    public Object getUserInfo() {
        List<UserInfo> userInfoList = new ArrayList<>();

        // ##### 예제 데이터 반환 #####
        UserInfo userInfo1 = new UserInfo();
        userInfo1.setId("Spring");
        userInfo1.setPassword("000000");
        userInfo1.setName("스프링 김");
        userInfo1.setEmail("Spring@naver.com");
        userInfoList.add(userInfo1);

        UserInfo userInfo2 = new UserInfo();
        userInfo2.setId("YoonHan0");
        userInfo2.setPassword("000000");
        userInfo2.setName("한영 윤");
        userInfo2.setEmail("YoonHan0@naver.com");
        userInfoList.add(userInfo2);

        return userInfoList;
    }
}
