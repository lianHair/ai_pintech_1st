package exam01;

public class Student {
    static int id;  // 학번
    String name;  // 학생명
    String major;  // 전공

    public Student() {}

    void showInfo() {
        System.out.printf("id=%d, name=%s, major=%s%n", id, name, major);
    }

    static void staticMethod() {
        System.out.println("정적 메서드!");
        //this.name = "이리안";
        id = 1000; // 정적 변수

        //this.showInfo(); => this 존재하지 않아서 안됨
        //showInfo();
    }
}
