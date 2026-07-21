package com.cognizant.ormlearn.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.cognizant.ormlearn.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // HQL: Get all permanent employees with dept and skills
    @Query("SELECT e FROM Employee e "
         + "left join fetch e.department d "
         + "left join fetch e.skillList "
         + "WHERE e.permanent = 1")
    List<Employee> getAllPermanentEmployees();

    // HQL: Average salary by department
    @Query("SELECT AVG(e.salary) FROM Employee e "
         + "WHERE e.department.id = :id")
    double getAverageSalary(@Param("id") int id);

    // Native Query: Get all employees
    @Query(value = "SELECT * FROM employee", nativeQuery = true)
    List<Employee> getAllEmployeesNative();
}
