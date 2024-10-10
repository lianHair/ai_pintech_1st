// 변수 두개를 선언해서 20과 3.6을 대입하고 두 변수의 사칙연산 결과를 정수로 출력하셈
package exam01;

public class Quiz1 {
    public static void main(String[] args) {
        int num1 = 20;
        double num2 = 3.6;

     // int result = num1 * (int)num2;    // 오답 -> 20 * 정수화(3.6)3 = 60
        int result = (int)(num1 * num2);  // 정답 -> 20 * 3.6 = 정수화(72)
        System.out.println(result);
    }
}
