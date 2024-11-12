package org.koreait.member.controllers;

import org.koreait.member.entities.Member;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.IntStream;

@Controller
@RequestMapping("/member")
public class MemberController { // /member/login, /member/join

    @GetMapping("/join")
    public String join(Model model) {
        
        RequestJoin form = new RequestJoin();
        form.setEmail("lian@naver.com");
        form.setPassword("1234");
        form.setConfirmPassword("1234");
        form.setName("리안");

        model.addAttribute("requestJoin", form);

        return "member/join";
    }

    @PostMapping("/join")
    public String joinPs() {

        return "redirect:/member/login";
    }

    @GetMapping("/list")
    public String list(Model model) {

        List<Member> members  = IntStream.rangeClosed(1, 10)
                .mapToObj(i -> {
                    Member member = new Member();
                    member.setSeq(i);
                    member.setEmail("user" + i + "@test.org");
                    member.setName("<h1>사용자" + i);
                    member.setPassword("12345");
                    member.setModDt(LocalDateTime.now());
                    member.setModDt(LocalDateTime.now());

                    return member;
                }).toList();

        model.addAttribute("members", members);

        return "member/list";
    }
}
