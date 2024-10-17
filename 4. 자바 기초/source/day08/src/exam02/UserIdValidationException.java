package exam02;
// Validation = 검증
public class UserIdValidationException extends RuntimeException {
    public UserIdValidationException(String message) {
        super(message);
    }
}
