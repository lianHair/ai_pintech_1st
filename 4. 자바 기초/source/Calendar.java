import java.time.YearMonth;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.Scanner;

public class Calendar {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("연도 입력");
        int year = scanner.nextInt();

        System.out.print("월 입력");
        int month = scanner.nextInt();

        YearMonth yearMonth = YearMonth.of(year, month);

        // 해당 월의 첫 번째 날짜와 마지막 날짜 구하기
        LocalDate firstDayMonth = yearMonth.atDay(1);
        int lastDay = yearMonth.lengthOfMonth();

        // 첫 번째 날의 요일 구하기
        DayOfWeek startDay = firstDayMonth.getDayOfWeek();
        int startDayValue = startDay.getValue(); // 1: 월요일, 7: 일요일

        // 달력 출력
        System.out.printf("%d년 %d월%n", year, month);
        System.out.println("일 월 화 수 목 금 토");

        // 첫 주 빈칸 출력
        for (int i = 1; i < startDayValue; i++) {
            System.out.print("   ");
        }

        // 날짜 출력
        for (int day = 1; day <= lastDay; day++) {
            System.out.printf("%2d ", day);

            // 토요일마다 줄바꿈
            if ((day + startDayValue - 1) % 7 == 0) {
                System.out.println();
            }
        }
        System.out.println();

        scanner.close();
    }
}
