package org.koreait.member;

import lombok.*;

//@Setter @Getter @ToString
//@Data
//@NoArgsConstructor(access = AccessLevel.PRIVATE)
//@AllArgsConstructor
//@RequiredArgsConstructor
@Builder
@ToString
public class Member {
    private long seq; // 회원 번호
    private final String email; // 이메일

    //@NonNull
    //@ToString.Exclude // ToString 에서 배제
    private String password;
}
