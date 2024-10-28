package exam01;

import java.util.function.Consumer;

public class Book {
    private String title;
    
    public void test() {
        Consumer<String> opr = (s) -> setTitle(s);
        Consumer<String> opr2 = this::setTitle; // 메서드 참조
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}
