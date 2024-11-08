package exam01;

import java.io.File;

public class Ex19 {
    public static void main(String[] args) throws Exception {
        //File dir = new File("D:/tmp"); // 경로가 실제로 있는지 체크, 없으면 생성
        File dir = new File("D:/tmp/sub/sub2"); // 없는 경로가 3개일 경우

        if (!dir.exists()) { // 디렉토리가 없다면?
            //dir.mkdir(); // 디렉토리를 1개만 생성
            // 없으면 만드셈 -> 없어서 tmp 폴더 생성됨 "D:/tmp"일 경우만..
            dir.mkdirs(); // 하위 디렉토리도 생성 (여러개 OK)
        }
        File file = new File(dir, "test.txt");

        file.createNewFile();
    }
}
