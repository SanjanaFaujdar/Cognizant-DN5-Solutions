import org.junit.Test;
import org.junit.Before;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class MockingTest {

    private PaymentService paymentService;
    private EmailService emailService;

    @Before
    public void setUp() {
        paymentService = mock(PaymentService.class);
        emailService   = mock(EmailService.class);
    }

    @Test
    public void testMockPaymentService() {
        when(paymentService.processPayment(100.0)).thenReturn(true);
        boolean result = paymentService.processPayment(100.0);
        assertTrue(result);
    }

    @Test
    public void testStubEmailService() {
        when(emailService.sendEmail("test@email.com", "Hello")).thenReturn("Email Sent");
        String result = emailService.sendEmail("test@email.com", "Hello");
        assertEquals("Email Sent", result);
    }
}

interface PaymentService {
    boolean processPayment(double amount);
}

interface EmailService {
    String sendEmail(String to, String message);
}
