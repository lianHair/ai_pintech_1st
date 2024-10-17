package exam02;

public class Ex01 {
    public static void main(String[] args) {
        Animal tiger = new Tiger(); // Tiger, Animal 다형성
        tiger.move();

        Animal bird = new Bird(); // Bird, Animal 다형성
        bird.move();

        Animal human = new Human(); // Human, Animal 다형성
        human.move();

        // 같은 자료형이어야만 배열화 가능
    }
}
