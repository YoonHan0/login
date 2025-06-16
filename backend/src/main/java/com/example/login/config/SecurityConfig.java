package com.example.login.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // Spring Security는 회원가입, 사용자 인증(로그인) 시 비밀번호에 대해 단방향 해시 암호화를 진행하여 저장되어 있는 비밀번호와 대조한다.
    // 암호화를 위해 BCryptPasswordEncoder 클래스를 제공하고 해당 방식으로 처리할 것을 권장한다.
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/", "/login").permitAll()
                        .requestMatchers("/admin").hasRole("ADMIN")
                        .requestMatchers("/getUserInfo").permitAll()
                        .requestMatchers("/my/**").hasAnyRole("ADMIN", "USER")
                        .anyRequest().authenticated()
                );

        http
                .formLogin((auth) -> auth.loginPage("/login")       // 권한이 없는 admin과 같은 경로로 사용자가 요청했을 때 오류 페이지가 아닌 작성한 "경로"로 Spring Security가 리다이랙트 시켜줌
                        .loginProcessingUrl("/loginProc")           // 해당 경로로 요청이 들어오면 Security가 로그인 처리를 진행
                        .defaultSuccessUrl("/login", true)
                        .permitAll()                                // 로그인 처리를 한다는게 permitAll() 권한을 준다는 것 같음
                );

        http
                .csrf((auth) -> auth.disable());                    // POST방식으로 요청을 진행할 때 CSRF(사이트 위변조 방지 설정) 토큰을 보내야 로그인 처리를 가능하게 함, 이러한 설정은 Spring Security에서 설정되어 있음
                                                                    // 개발환경에서는 토큰을 사용하는 것이 불편하므로 disable 처리, 추후에 inable 처리하도록 수정

        return http.build();
    }
    /*
    * requestMatchers(경로): "경로"에 대한 권한을 설정할 수 있다.
    * permitAll(): 모든 사용자에게 접근 가능하도록 설정
    * hasRole(권한): "권한"이 있는 사용자만이 requestMatchers(경로)에 설정된 경로에 접근할 수 있다.
    * hasAnyRole(권한1, 권한2, ...): 여러 "권한"에 대해 접근을 제어할 수 있다.
    * anyRequest(): 위에서 처리하지 못한 나머지 경로에 대한 권한 제어를 처리할 수 있음.
    * authenticated(): 로그인한 사용자만이 접근할 수 있도록     /    denyAll(): 모든 사용자의 접근을 제한함
    *
    *   requestMatchers()를 이용해 경로에 대한 접근을 제한할 때 순서가 중요하다. 많은 권한에 대한 제한은 가장 마지막에 작성하는 것이 올바르다.
    * */
}
