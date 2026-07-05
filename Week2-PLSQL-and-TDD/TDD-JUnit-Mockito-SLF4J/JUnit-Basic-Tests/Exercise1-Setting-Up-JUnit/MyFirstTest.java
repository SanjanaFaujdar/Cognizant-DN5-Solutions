import org.junit.Test;
import static org.junit.Assert.*;

public class MyFirstTest {

    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals(5, result);
    }

    @Test
    public void testSubtraction() {
        int result = 10 - 4;
        assertEquals(6, result);
    }

    @Test
    public void testMultiplication() {
        int result = 3 * 4;
        assertEquals(12, result);
    }
}
