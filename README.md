# Expense-Tracker 

![Java](https://img.shields.io/badge/Java-17-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![REST API](https://img.shields.io/badge/REST-API-lightgrey)
![Maven](https://img.shields.io/badge/Maven-Build-orange)

A full-stack Expense Tracker web application built using Spring Boot, MySQL, and Vanilla JavaScript that helps users manage daily expenses with clean UI, date-wise tracking, and visual expense analysis.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Built With](#built-with)
4. [Project Structure](#project-structure)
5. [How It Works](#how-it-works)
6. [How to Run](#how-to-run)
7. [Future Enhancements](#future-enhancements)
8. [Author](#author)

---

## Overview

Managing personal expenses can be difficult without proper tracking. This **Expense Tracker Web Application** allows users to:

- Add daily expenses
- View expenses month-wise
- Analyze spending patterns
- Download monthly expense reports

The project is designed with a **user-friendly interface**, making expense management simple and effective.

---

## Features

- Add expenses with title, amount, category & description  
- Month-wise expense navigation (Previous)
- Monthly & yearly expense comparison charts
- Spending summary & category-wise breakdown  
- Filter transactions (date, amount, category, alphabetical)    
- Download monthly expense report (CSV)  
- Clean & responsive UI design
- Backend REST API using Spring Boot
- Persistent storage with MySQL

---

## Built With

- **Frontend:** HTML5, CSS3, JavaScript (ES Modules)
- **Backend:** Java 17, Spring Boot, Spring Data JPA
- **Database:** MySQL
- **Tools:** IntelliJ IDEA, MySQL Workbench, GitHub

---

## Project Structure
```md
expense-track/
│
├── src/main/java/com/example/expensetrack
│   ├── controller
│   │   └── ExpenseController.java
│   ├── entity
│   │   └── Expense.java
│   ├── repository
│   │   └── ExpenseRepository.java
│   └── ExpenseTrackApplication.java
│
├── src/main/resources
│   ├── static
│   │   ├── css
│   │   │   └── style.css
│   │   └── js
│   │       ├── main.js
│   │       ├── state.js
│   │       ├── ui.js
│   │       ├── modal.js
│   │       ├── expenses.js
│   │       ├── filter.js
│   │       └── month.js
│   └── templates
│       └── index.html
│
├── pom.xml
└── README.md
```

---

## How It Works

1. User selects a month using navigation arrows  
2. Frontend sends API requests to Spring Boot backend
3. Expenses are fetched from MySQL based on selected month and year
4. Summary cards update dynamically based on the data  
5. Transactions display date, time, category, amount, and description 
6. Empty-state message is shown when no expenses exist
7. Users can filter, delete, or download monthly expense report as a CSV file  

---

## How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```
### 2. Configure Database
Create a MySQL database named:
```bash
CREATE DATABASE expense_tracker;
```
Update credentials in application.properties.
### 3. Run the Application
```bash
./mvnw spring-boot:run
```
For Windows:
```bash
mvnw.cmd spring-boot:run
```
Access the app at:
```bash
http://localhost:9090
```

---

## Future Enhancements

- User authentication (Login / Signup)
- Mobile-first UI improvements
- Export reports to PDF
- Multi-user expense tracking
---

## Author
**Rashmi Devadiga**  
Bachelor of Computer Applications Graduate  
[LinkedIn](https://linkedin.com/in/rashmidevadiga) | [GitHub](https://github.com/rashmi-devadiga)

