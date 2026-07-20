import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {

    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {

        // Info level
        logger.info("Application started successfully.");

        // Debug level
        logger.debug("Debugging application flow.");

        // Warning level
        logger.warn("Low memory warning!");

        // Error level
        logger.error("An error occurred while processing the request.");

        // Logging with parameters
        String user = "Sanjana";
        int age = 21;
        logger.info("User {} is {} years old.", user, age);

        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.error("Exception caught: Division by zero", e);
        }
    }
}
