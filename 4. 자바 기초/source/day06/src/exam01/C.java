package exam01;

// B 상속 받을 것임
public class C  extends B {
    int numC = 30;

    public C() {
        super(); // 컴파일러가 자동 추가 -> B()
        System.out.println("C 생성자!");
    }
}
