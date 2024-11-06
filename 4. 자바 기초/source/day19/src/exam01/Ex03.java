package exam01;

import java.util.List;

public class Ex03 {
    public static void main(String[] args) {
        List<String> words = List.of("AA", "BBB", "CCC", "DDD", "EEEE");

        boolean result1 = words.stream().allMatch(s -> s.length() >= 3);
        System.out.println(result1); // allMatch -> 한개의 조건이라도 틀리면 false

        boolean result2 = words.stream().anyMatch(s -> s.length() >= 3);
        System.out.println(result2); // anyMatch -> 한개의 조건이라도 맞으면 true
    }
}
