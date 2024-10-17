package exam01;

import static exam01.Student.staticMethod;

public class Ex03 {
    public static void main(String[] args) {
        Student.id = 1000;

        Class cls = Student.class;

        staticMethod();
    }
}
