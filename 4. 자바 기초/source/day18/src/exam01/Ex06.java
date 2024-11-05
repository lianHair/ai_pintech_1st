package exam01;

import java.util.stream.IntStream;

public class Ex06 {
    public static void main(String[] args) {
        int sum = IntStream.rangeClosed(1, 100)
                    .filter(i -> i % 2 == 1)
                    .map(i -> i * i)
                    .sum();
        // range : 마지막 숫자 포함 X , rangeClosed : 마지막 숫자 포함
        System.out.println(sum);
    }
}
