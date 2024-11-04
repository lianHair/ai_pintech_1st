package exam01;

import java.util.Map;
import java.util.TreeMap;

public class Ex01 {
    public static void main(String[] args) {
        Map<String, String> items = new TreeMap<>();
        items.put("lian05", "리안05");
        items.put("lian01", "리안01");
        items.put("lian02", "리안02");
        items.put("lian04", "리안04");
        items.put("lian03", "리안03");

        items.forEach((k, v) -> System.out.printf("%s=%s%n", k, v));
    }
}
