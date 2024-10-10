package exam01.Quiz;

public class Quiz3 {
    public static void main(String[] args) {
        int elevation = 5;
        switch (elevation){
            case 1 :
                System.out.println("1층 약국임");break;
            case 2 :
                System.out.println("2층 정형외과임");break;
            case 3:
                System.out.println("3층 피부과임");break;
            case 4:
                System.out.println("4층 치과임");break;
            case 5:
                System.out.println("5층 헬스클럽임");break;
            default:
                System.out.println("없음");
        }
    }
}
