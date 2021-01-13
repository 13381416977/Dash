package dash.repository;

import dash.model.Student;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
public class FormRepositoryTest {

    @Autowired
    FormRepository repository;
    @Autowired
    StudentRepository student;

    @Test
    public void all(){
    System.out.println(repository.count());
    }

    @Test
    public void stu(){
        Student wlw = new Student(1, "wlw", 12, 14);
        student.save(wlw);
        System.out.println(student.count());
    System.out.println(student.findAll());
    }

}