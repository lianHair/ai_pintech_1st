package exam01;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex17 {
    public static void main(String[] args) throws Exception {
        //char ch = (char)System.in.read();
        //System.out.println(ch);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        // 위에 코드는 너무 길어서 Scanner 쓰는게 일반적임
        char ch = (char)br.read();
        System.out.println(ch);
    }
}
