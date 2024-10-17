package exam05;

import java.util.HashSet;
import java.util.Set;

public class Ex06 {
    public static void main(String[] args) {
        Set<Customer> items = new HashSet<>();
        items.add(new Customer(1000,"리안","lian@naver.com"));
        items.add(new Customer(1000,"리안","lian@naver.com"));
        items.add(new Customer(1000,"리안","lian@naver.com"));
        items.add(new Customer(2000,"리리안","relian@naver.com"));
        items.add(new Customer(3000,"류리안","ryulian@naver.com"));

        for (Customer item : items) {
            System.out.println(item);
        }
    }
}
