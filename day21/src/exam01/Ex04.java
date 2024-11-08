package exam01;

import java.io.FileOutputStream;
import java.io.IOException;

public class Ex04 {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("b.txt")) {
            for (char ch = 'A'; ch <= 'Z'; ch++) {
                fos.write(ch); // b.txt 파일 없었는데 생김 ㄷㄷ A~Z 까지 들어가있음
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
