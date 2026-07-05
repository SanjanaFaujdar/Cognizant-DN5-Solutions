import org.junit.Test;
import static org.junit.Assert.*;

// Exercise 3: Assertions in JUnit
public class AssertionsTest {

    @Test
    public void testAssertions() {
        // Assert equals
        assertEquals(5, 2 + 3);

        // Assert true
        assertTrue(5 > 3);

        // Assert false
        assertFalse(5 < 3);

        // Assert null
        assertNull(null);

        // Assert not null
        assertNotNull(new Object());
    }

    @Test
    public void testStringAssertions() {
        String expected = "Hello";
        String actual   = "Hello";
        assertEquals(expected, actual);
        assertNotNull(actual);
        assertTrue(actual.startsWith("H"));
    }

    @Test
    public void testArrayEquals() {
        int[] expected = {1, 2, 3};
        int[] actual   = {1, 2, 3};
        assertArrayEquals(expected, actual);
    }
}
