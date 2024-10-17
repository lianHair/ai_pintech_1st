package exam03;

import exam01.C;

public abstract class Calculator {
    int num = 10;

    public Calculator() {
        System.out.println("Calculator 생성자 호출");
    }

    public abstract int add(int num1, int num2); 2 implementations ;
    //public abstract int minus(int num1, int num2);
}
