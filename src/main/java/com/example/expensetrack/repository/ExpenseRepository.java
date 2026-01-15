package com.example.expensetrack.repository;

import com.example.expensetrack.entity.Expense;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

    List<Expense> findByCreatedAtBetween(
            LocalDateTime start,
            LocalDateTime end
    );
}