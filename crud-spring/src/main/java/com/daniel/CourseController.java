package com.daniel;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.daniel.model.Course;
import com.daniel.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;  

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id) {
    Optional<Course> course = courseRepository.findById(id);
    return course.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
}

    @ResponseStatus(code = HttpStatus.CREATED)
    @PostMapping
    public Course create(@RequestBody Course course ) {
        return courseRepository.save(course);
    }
    
}
