package com.example.login.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class CheckController {

    @GetMapping("/checkLogin")
    public Object checkLogin(HttpServletRequest request) {

        System.out.println("===== checkLogin() 호출 =====");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();                       // Spring Security에 저장된 사용자 인증 정보 가져오기

        if (auth != null && auth.isAuthenticated() && !(auth instanceof AnonymousAuthenticationToken)) {    // 인증이 된 사용자인지 확인, 로그인하지 않은 사용자일 경우 Spring Security에서는 AnonymousAuthenticationToken으로 나타남, 로그인 하지 않은 사용자도 auth.isAuthenticated() == true일 수 있기에 확인
            String userName = SecurityContextHolder.getContext().getAuthentication().getName();       // 세션 현재 사용자의 이름 확인
            System.out.println("=== 사용자 정보 확인 ===");
            System.out.println(userName);

            // 여기서 담아서 프론트로 보내주고, 프론트 main에서 사용자를 출력해주자
            return Map.of("authenticated", true);
        } else {
            return Map.of("authenticated", false);
        }
    }
}
