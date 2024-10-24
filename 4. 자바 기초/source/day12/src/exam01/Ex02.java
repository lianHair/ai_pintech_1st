package exam01;

public class Ex02 {
    public static void main(String[] args) {
        Calculator cal = new Calculator() {
            @Override
            public int add(int num1, int num2) {
                return num1 + num2;
            }
        };

        // 람다식 문법
        // 코드가 두 줄 이상일 경우 return 못날림
        Calculator cal2 = (a, b) -> /* return */a + b;
    }
}
