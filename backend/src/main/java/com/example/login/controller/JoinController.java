package com.example.login.controller;

import com.example.login.model.UserInfo;
import com.example.login.service.JoinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class JoinController {

    @Autowired
    private JoinService service;

    @PostMapping("/joinProc")
    @ResponseBody
    public Object joinProcess(@RequestBody UserInfo userInfo) throws Exception {
        System.out.println("### 회원가입 진행 ### \n" + userInfo);
        service.joinProcess(userInfo);

        return "OK";
    }
}
