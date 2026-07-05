import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

// Exercise 4: AAA Pattern, Test Fixtures, Setup and Teardown
public class AAAPatternTest {

    private Calculator calculator;

    // Setup - runs before each test
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator initialized.");
    }

    // Teardown - runs after each test
    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator destroyed.");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 5, b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(8, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10, b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }

    @Test
    public void testMultiplication() {
        // Arrange
        int a = 3, b = 4;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(12, result);
    }
}

// Simple Calculator class
class Calculator {
    public int add(int a, int b)      { return a + b; }
    public int subtract(int a, int b) { return a - b; }
    public int multiply(int a, int b) { return a * b; }
}
