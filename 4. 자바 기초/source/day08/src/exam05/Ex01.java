package exam05;

public class Ex01 {
    public static void main(String[] args) {
        Customer c1 = new Customer(1000, "리안", "lian@naver.com");
        Customer c2 = new Customer(1000,"리안","lian@naver.com");
        System.out.printf("c1 == c2 : 동일성 ? : %s%n", c1 == c2);
        System.out.printf("c1.equals(c2) : 동등성 ? %s%n", c1.equals(c2));
        System.out.printf("c1 주소 ? %d%n", System.identityHashCode(c1));
        System.out.printf("c2 주소 ? %d%n", System.identityHashCode(c2));
    }
}