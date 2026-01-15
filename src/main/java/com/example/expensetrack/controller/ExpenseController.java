package com.example.expensetrack.controller;

import com.example.expensetrack.entity.Expense;
import com.example.expensetrack.repository.ExpenseRepository;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/expenses")
@CrossOrigin
public class ExpenseController {

    private final ExpenseRepository repo;

    public ExpenseController(ExpenseRepository repo) {
        this.repo = repo;
    }

    // ✅ ADD EXPENSE
    @PostMapping
    public Expense addExpense(@RequestBody Expense expense) {
        // ❌ DO NOT set date here
        return repo.save(expense);
    }


    // ✅ GET ALL EXPENSES (ONLY ONE)
    @GetMapping
    public List<Expense> getAllExpenses() {
        return repo.findAll();
    }

    // ✅ GET EXPENSES BY MONTH + YEAR
    @GetMapping("/by-month")
    public List<Expense> getExpensesByMonth(
            @RequestParam int month,
            @RequestParam int year
    ) {
        LocalDateTime start = LocalDateTime.of(year, month, 1, 0, 0);
        LocalDateTime end = start.plusMonths(1);
        return repo.findByCreatedAtBetween(start, end);
    }

    // ✅ DELETE EXPENSE
    @DeleteMapping("/{id}")
    public void deleteExpense(@PathVariable int id) {
        repo.deleteById(id);
    }
}
