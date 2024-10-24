// 5층 건물이 있습니다. 1층 약국, 2층 정형외과, 3층 피부과, 4층 치과, 5층 헬스클럽입니다.
// 건물의 층을 누르면 그 층이 어떤 곳인지 알려주는 엘리베이터가 있을 때
// 이를  switch ~ case 문으로 구현하시오
// 예) 5층일 경우 '5층 헬스클럽입니다.'
package exam01;

public class Quiz3 {
    public static void main(String[] args) {
        int floor = 6;
        switch (floor) {
            case 1:
                System.out.println("1층 약국");
                break;
            case 2:
                System.out.println("2층 정형외과");
                break;
            case 3:
                System.out.println("3층 피부과");
                break;
            case 4:
                System.out.println("4층 치과");
                break;
            case 5:
                System.out.println("5층 헬스클럽");
                break;
            default:
                System.out.println("그런거 없다.");
        }
    }
}
