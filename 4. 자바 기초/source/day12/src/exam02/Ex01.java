package exam02;

import java.util.function.BiFunction;
import java.util.function.BinaryOperator;
import java.util.function.IntBinaryOperator;

public class Ex01 {
    public static void main(String[] args) {
        /*
        BiFunction<Integer, Integer, Integer> cal = (a, b) -> a + b; // '참조자료형'만 써야함
        int result = cal.apply(10, 20);
        System.out.println(result);
        */
        /*
        BinaryOperator<Integer> cal = (a, b) -> a + b;
        int result = cal.apply(10, 20);
        System.out.println(result);
        */
        IntBinaryOperator cal = (a, b) -> a + b;
        int result = cal.applyAsInt(10, 20);
        System.out.println(result);
    }
}
