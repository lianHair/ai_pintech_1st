package org.koreait.exam01;

import org.junit.jupiter.api.Test;
import org.koreait.global.configs.AppCtx;
import org.koreait.global.configs.AppCtx2;
import org.koreait.global.configs.AppCtx3;
import org.koreait.member.controllers.RequestJoin;
import org.koreait.member.services.InfoService;
import org.koreait.member.services.JoinService;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Ex01 {
    @Test
    void test1() {
        //AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx.class);
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx3.class);
        // 1) 객체 생성, 2) 의존성 주입, 3) 초기화 -> 모든 완성된 객체가 컨테이너 안에 있다!

        //JoinService service = ctx.getBean("joinService", JoinService.class);
        JoinService service = ctx.getBean(JoinService.class); // 위 주석과 같은 값

        //InfoService infoService = ctx.getBean("infoService", InfoService.class);
        InfoService infoService = ctx.getBean(InfoService.class); // 위 주석과 같은 값

        RequestJoin form = new RequestJoin();
        form.setEmail("lian1@test.org");
        form.setPassword("1234");
        form.setConfirmPassword("1234");
        form.setUserName("리안1");
        form.setAgree(true);

        service.process(form); // 회원 가입 처리
        
        infoService.print(); // 가입한 회원 목록 출력

        ctx.close();
    }

    @Test
    void test2() {
        //AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx.class, AppCtx2.class);
        AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext(AppCtx3.class);
        // 하나만 추가해도 import(AppCtx2.class) 해놔서 위 주석과 같은 값

        DateTimeFormatter formatter = ctx.getBean(DateTimeFormatter.class);
        String str = formatter.format(LocalDateTime.now());
        System.out.println(str);

        ctx.close();
    }
}
