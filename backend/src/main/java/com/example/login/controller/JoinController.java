package com.example.login.controller;

import com.example.login.model.UserInfo;
import com.example.login.service.JoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class JoinController {

    @Autowired
    private JoinService service;

    @GetMapping("/joinProc")
    public String joinProcess(UserInfo userInfo) {
        System.out.println("### 회원가입 진행 ### \n" + userInfo);
        try {
            service.joinProcess(userInfo);
        } catch (Exception error) {
            System.out.println("회원가입 에러 발생 \n" + error);
            return "Fail";
        }
        return "OK";
    }
}
