# Expense-Tracker 

![Java](https://img.shields.io/badge/Java-17-red)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![REST API](https://img.shields.io/badge/REST-API-lightgrey)
![Maven](https://img.shields.io/badge/Maven-Build-orange)

A full-stack Expense Tracker Web Application that helps users track monthly expenses, analyze spending by category, and download reports. 
Built using Spring Boot (Java) for the backend, MySQL for data storage, and HTML, CSS, and Vanilla JavaScript for the frontend.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Built With](#built-with)
4. [Project Structure](#project-structure)
5. [How It Works](#how-it-works)
6. [Screenshots](#screenshots)
7. [How to Run](#how-to-run)
8. [Future Enhancements](#future-enhancements)
9. [Author](#author)

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
- Month-wise navigation (Previous)
- Spending summary & category-wise breakdown  
- Filter transactions (date, amount, category, alphabetical)    
- Download monthly expense report (CSV)  
- Clean & responsive UI design  

---

## Built With

-**Frontend:** HTML5, CSS3, JavaScript (ES Modules)
-**Backend:** Java 17, Spring Boot, Spring Data JPA
-**Database:** MySQL
**Tools:** IntelliJ IDEA, MySQL Workbench, GitHub

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
5. Transactions are displayed with date, time, category, & description  
6. If no transactions exist, an empty-state message is shown  
7. Users can filter, delete, or download the monthly expense report as a CSV file  

---

## Screenshots

<p align="center">
  <img src="screenshots/transaction.png" width="30%">
  <img src="screenshots/add-expense.png" width="30%">
  <img src="screenshots/empty.png" width="30%">
</p>

---

## How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```
### 2. Firebase Setup
1. Go to Firebase Console & Create a new project
2. Enable Firestore Database
3. Create a Web App and copy the Firebase configuration
4. Paste the configuration into firebase.js
### 3. Run the App
Open index.html in your browser
*(Or use Live Server in VS Code)*

---

## Future Enhancements

- User authentication (Login / Signup)
- Mobile-first UI improvements
- Charts & analytics (monthly comparison)
- Export reports to PDF

---

## Author
**Rashmi Devadiga**  
Bachelor of Computer Applications Graduate  
[LinkedIn](https://linkedin.com/in/rashmidevadiga) | [GitHub](https://github.com/rashmi-devadiga)

