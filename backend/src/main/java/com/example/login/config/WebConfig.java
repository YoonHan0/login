package com.example.login.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
    SpringBoot는 기본적으로 @SpringBootApplication 어노테이션이 붙은 클래스가 위치한 패키지와 그 하위 패키지들을 스캔하여
    @Configuration, @Component, @Service, @Repository 등의 어노테이션이 붙은 클래스를 자동으로 감지하고 설정합니다.
*/
//@Configuration
public class WebConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        System.out.println("######### WebConfig #########");
//        registry.addMapping("/**")             // 모든 경로에 대해
//                .allowedOrigins("http://localhost:3000")  // 허용할 출처(React 개발 서버)
//                .allowedMethods("GET", "POST", "PUT", "DELETE")  // 허용할 HTTP 메서드
//                .allowedHeaders("*")                             // 허용할 헤더
//                .allowCredentials(true);                         // 쿠키, 인증 정보 허용 여부
//    }
}

