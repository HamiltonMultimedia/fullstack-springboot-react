package com.hamilton.fullstacksbreact.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {

    @GetMapping
    public List<Student> getAllStudents() {
        List<Student> students = Arrays.asList(
//                new Student(
//                        1L,
//                        "Aniyah",
//                        "aniyah@hamilton.edu",
//                        Gender.FEMALE),
//                new Student(
//                        2L,
//                        "Terence",
//                        "terence@hamilton.edu",
//                        Gender.MALE),
//                new Student(
//                        3L,
//                        "Nevaeh",
//                        "nevaeh@hamilton.edu",
//                        Gender.FEMALE)
        );
        return students;
    }

}
