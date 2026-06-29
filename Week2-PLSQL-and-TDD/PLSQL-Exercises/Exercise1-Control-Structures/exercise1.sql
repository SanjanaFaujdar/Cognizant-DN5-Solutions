-- Exercise 1: Control Structures

-- Scenario 1: Apply 1% discount on loan interest rate for customers above 60
BEGIN
    FOR rec IN (SELECT c.customer_id, c.age, l.loan_id, l.interest_rate
                FROM customers c
                JOIN loans l ON c.customer_id = l.customer_id) LOOP
        IF rec.age > 60 THEN
            UPDATE loans
            SET interest_rate = interest_rate - (interest_rate * 0.01)
            WHERE loan_id = rec.loan_id;
            DBMS_OUTPUT.PUT_LINE('Discount applied for customer ID: ' || rec.customer_id);
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 2: Set IsVIP = TRUE for customers with balance over $10,000
BEGIN
    FOR rec IN (SELECT customer_id, balance FROM customers) LOOP
        IF rec.balance > 10000 THEN
            UPDATE customers SET isvip = TRUE WHERE customer_id = rec.customer_id;
            DBMS_OUTPUT.PUT_LINE('Customer ID ' || rec.customer_id || ' marked as VIP.');
        ELSE
            UPDATE customers SET isvip = FALSE WHERE customer_id = rec.customer_id;
        END IF;
    END LOOP;
    COMMIT;
END;
/

-- Scenario 3: Send reminders for loans due within next 30 days
BEGIN
    FOR rec IN (SELECT l.loan_id, l.due_date, c.customer_id, c.name
                FROM loans l
                JOIN customers c ON l.customer_id = c.customer_id
                WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30) LOOP
        DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || rec.name ||
                             ', your loan ID ' || rec.loan_id ||
                             ' is due on ' || TO_CHAR(rec.due_date, 'DD-MON-YYYY'));
    END LOOP;
END;
/
