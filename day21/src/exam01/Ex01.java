package exam01;

import java.io.FileInputStream;
import java.io.IOException;

public class Ex01 {
    public static void main(String[] args) {
        try(FileInputStream fis = new FileInputStream("a.txt")) {
            // a.txt 내용 = ABCD

            int ch = fis.read(); // 1바이트 읽기
            System.out.println((char)ch); // A

            ch = fis.read();
            System.out.println((char)ch); // B

            ch = fis.read();
            System.out.println((char)ch); // c

            ch = fis.read();
            System.out.println((char)ch); // D

            ch = fis.read(); // 다 읽은 상태에서 다시 읽기
            System.out.println(ch); // -1

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
