package exam01;

public class Ex01 {
    public static void main(String[] args) { // main 함수는 프로그램을 시작해주는 함수
        int num1 = 10; // main 함수의 지역 변수
        int num2 = 20;
        int result = add(num1, num2); }
    // num1, num2, result - 함수 지역 내에서만 유의미한 변수 // add 함수의 지역 변수

    // num1과 num2는 실행되기 전 (연산을 실행할떄)까지는 변수가 아님
    //   -> 함수를 실행할때 메모리를 할당받음
    // 리턴으로 함수가 끝난 후에는 역할을 다했기 때문에 제거됨 // 스택 메모리
    static int add(int num1, int num2) { // num1, num2 지역변수이자 매개변수
        int result = num1 + num2;
        return result;
    }
}
