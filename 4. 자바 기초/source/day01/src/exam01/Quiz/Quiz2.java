package exam01.Quiz;

public class Quiz2 {
    public static void main(String[] args) {

        for(int person = 1, room = 0; person<=40; person++, room++){
            System.out.println("학생"+person+", 방번호"+room%10+"번");
        }
    }
}
