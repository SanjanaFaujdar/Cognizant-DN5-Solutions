import org.junit.Test;
import org.junit.Before;
import static org.mockito.Mockito.*;

public class VerifyingTest {

    private UserService userService;
    private NotificationService notificationService;

    @Before
    public void setUp() {
        userService         = mock(UserService.class);
        notificationService = mock(NotificationService.class);
    }

    @Test
    public void testVerifyMethodCalled() {
        userService.createUser("Sanjana");
        verify(userService, times(1)).createUser("Sanjana");
    }

    @Test
    public void testVerifyNotificationSent() {
        notificationService.sendNotification("Welcome!", "Sanjana");
        verify(notificationService).sendNotification("Welcome!", "Sanjana");
    }

    @Test
    public void testVerifyNoInteractions() {
        verifyNoInteractions(userService);
    }
}

interface UserService {
    void createUser(String name);
}

interface NotificationService {
    void sendNotification(String message, String user);
}
