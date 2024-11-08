package exam03;

import java.time.LocalDate;
import java.time.temporal.ChronoField;

public class Ex02 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        //int year = today.get(ChronoField.YEAR);
        //int month = today.get(ChronoField.MONTH_OF_YEAR);
        //int day = today.get(ChronoField.DAY_OF_MONTH);
        // 날짜 조회 많이하는데 이건 너무 길어요
        // 그래서 이렇게는 잘 안써요 ㅎㅎ

        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();

        System.out.printf("year=%d, month=%d, day=%d", year, month, day);
    }
}
