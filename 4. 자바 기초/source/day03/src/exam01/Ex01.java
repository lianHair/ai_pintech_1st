package exam01;

public class Ex01 {
    public static void main(String[] args) {
        for(int i = 2; i <= 9; i++){     // 구구단 2단 ~ 9단 // for(초기화식; 조건식; 증감식;
//            System.out.println("--- " + i + "단 ---");
              System.out.printf("--- %d단 ---%n %n", i);
            for(int j = 1; j <=9; j++){  // 1 ~ 9 곱할거임
//              System.out.println(i + " x " + j + " = " + i * j);
                System.out.printf("%d x %d = %d %n", i, j, i * j);
            }
        }
        System.out.print("가");    // 줄개행 X
        System.out.println("가");  // 줄개행 O
        System.out.print("나");
    }
}
