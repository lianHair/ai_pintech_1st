package exam01;

public class Ex04 {
    public static void main(String[] args) {
        C c = new C(); // C -> B -> A
        A ac = c;
        System.out.println(System.identityHashCode(c));
        System.out.println(System.identityHashCode(ac)); // c와 ac의 주소는 같다


        A a = new C();
        B b = new C();
    }
}
