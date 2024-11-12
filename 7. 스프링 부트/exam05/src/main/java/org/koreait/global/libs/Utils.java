package org.koreait.global.libs;

import org.springframework.stereotype.Component;

@Component("ut") // 빈 이름 ut 로 지음
public class Utils { // utils 빈 이름 안지을 경우 클래스 이름 소문자가 빈 이름이 됨
    public String hello(String name) {
        return String.format("%s님 반갑습니다", name);
    }
}
