package exam01.Quiz;

public class Quiz5 {
    public static void main(String[] args) {
        for(int gugudan = 1; gugudan<=9; gugudan++){
            for(int x = 1; x<=9; x++){
                if(gugudan>x){continue;}{
                System.out.println(gugudan+"x"+x+"="+gugudan*x);}
            }
        }
    }
}
