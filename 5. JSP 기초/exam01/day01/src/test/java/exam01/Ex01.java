package exam01;

import org.junit.jupiter.api.Test;
import org.koreait.member.Member;

public class Ex01 {
    @Test
    void test1() {
        //Member member = new Member(1L, "lian@test.org","123");
        //Member member = new Member("lian@test.org","123");

        /*
        member.setSeq(1L);
        member.setEmail("lian@test.org");
        member.setPassword("123");
        */

        //System.out.println(member);
    }

    @Test
    void test2() {
        //Member member = new Member();
        Member member = Member.builder()
                .seq(1L)
                .email("lian@test.org")
                .password("123")
                .build();

        System.out.println(member);
    }
}