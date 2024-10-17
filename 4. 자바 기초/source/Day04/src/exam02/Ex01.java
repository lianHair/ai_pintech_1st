package exam02;

import com.sun.security.jgss.GSSUtil;

public class Ex01 {
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.id = 1000;
        s1.name = "리안";
        s1.major = "영어";
        s1.showInfo();

        System.out.println("s1 주소: " + System.identityHashCode(s1));

        Student s2 = new Student();
        s2.id = 1001;
        s2.name = "라안";
        s2.major = "과학";
        s2.showInfo();

        System.out.println("s2 주소: " + System.identityHashCode(s2));

        Student s3= new Student();
        s3.name = "(수정)리안";
        s3.showInfo();  // 주소 복사 = 얕은 복사
        s2.showInfo();  // 같은 주소를 공유하고 있어서 같은 값이 나옴

        System.out.println("s1, s2 주소 : " + (s1 == s2));
        System.out.println("s2, s3 주소 : " + (s2 == s3));

    }
}
