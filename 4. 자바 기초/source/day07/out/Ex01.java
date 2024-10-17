package exam05;

public class Ex01 {
    public static void main(String[] args) {
        Outer out = new Outer();
        Outer.Inner inner = out.new Inner();  // 인스턴스 내부 클래스
    }
}