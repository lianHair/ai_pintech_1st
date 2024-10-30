package exam01;

import java.util.Vector;

public class Ex03 {
    public static void main(String[] args) {
        Vector<String> items = new Vector<>(5);
        System.out.println("배열 공간 갯수 : " + items.capacity());

        items.add("항목1");
        items.add("항목2");
        items.add("항목3");
        items.add("항목4");
        items.add("항목5");
        System.out.println("배열 공간 갯수 : " + items.capacity());

        items.add("항목6"); // 만든 공간 갯수 초과해서 배열 하나 더 추가됨
        System.out.println("배열 공간 갯수 : " + items.capacity());
    }
}
