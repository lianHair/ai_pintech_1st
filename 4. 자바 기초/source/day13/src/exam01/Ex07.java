package exam01;

import java.util.Optional;

public class Ex07 {
    public static void main(String[] args) {
        Optional<Book> opt = Optional.ofNullable(null);
        Book book = opt.orElseGet(() -> new Book());
        Book book2 = opt.orElseGet(Book::new); // 메서드 참조
    }
}
