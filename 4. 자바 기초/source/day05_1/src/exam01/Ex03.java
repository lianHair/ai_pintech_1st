package exam01;

public class Ex03 {
    public static void main(String[] args) {
        try {
            String str = "abc";
            System.out.println(str.toUpperCase()); // NullPointerException

            int num1 = 10;
            int num2 = 0;
            int result = num1 / num2; // ArithmethicException
            System.out.println(result);

            // (NullPointerException | ArithmeticException e) => 오류값이 같을 경우
            // (RuntimeException e) 하나로 묶기 가능
        } catch (RuntimeException e) {
            System.out.println(e.getMessage());
        }
          /* catch (Exception e) {     => 예외가 발생하는데 뭔지 모르겠다
            System.out.println(e.getMessage());
        } */

        // catch ~~ 위 아래 같은 말

        /*
        } catch (NullPointerException e) {
            System.out.println(e.getMessage());
            System.out.println("1번");

        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
            System.out.println("2번");
        }
         */

        System.out.println("실행 완료!");
    }
}
