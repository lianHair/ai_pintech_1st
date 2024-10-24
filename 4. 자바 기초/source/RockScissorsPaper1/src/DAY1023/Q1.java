package DAY1023;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class Q1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random random = new Random();
        String[] selections = {"가위", "바위", "보"};
        ArrayList<String> playerRandomSelections = new ArrayList<>();
        ArrayList<String> comRandomSelections = new ArrayList<>();

        // 유저와 컴퓨터의 랜덤 선택 5개씩 생성
        for (int i = 0; i < 5; i++) {
            int randomNumber = random.nextInt(selections.length);
            playerRandomSelections.add(selections[randomNumber]);

            int randomNumber2 = random.nextInt(selections.length);
            comRandomSelections.add(selections[randomNumber2]);
        }

        System.out.println("유저의 랜덤 선택 결과:\n" + playerRandomSelections);
        System.out.println("컴퓨터의 랜덤 선택 결과:\n" + comRandomSelections);

        // 게임 진행
        for (int i = 0; i < 5; i++) {
            System.out.println("\n라운드 " + (i + 1));
            System.out.println("유저의 선택은?! " + playerRandomSelections);
            System.out.print("입력하세요 (가위, 바위, 보): ");
            String userChoice = sc.nextLine();

            // 유저 선택 검증
            if (!playerRandomSelections.contains(userChoice)) {
                System.out.println("잘못된 선택입니다. 다시 입력해주세요.");
                i--; // 잘못된 입력이므로 라운드를 다시 진행
                continue;
            }

            // 컴퓨터의 선택
            String computerChoice = comRandomSelections.get(i);
            System.out.println("컴퓨터의 선택: " + computerChoice);

            // 선택된 항목 제거
            playerRandomSelections.remove(userChoice); // 유저의 선택 제거
            comRandomSelections.remove(computerChoice); // 컴퓨터의 선택 제거

            // 남은 선택지 출력
            System.out.println("유저 남은 선택: " + playerRandomSelections);
            System.out.println("컴퓨터 남은 선택: " + comRandomSelections);
        }

        sc.close();
    }
}
