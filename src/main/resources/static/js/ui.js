// STATE
import {
    expenses,
    filteredExpenses,
    isFilterActive,
    currentDate
} from "./state.js";

import { openForm } from "./modal.js";

// RENDER TRANSACTIONS
export function renderTransactions(list) {
    const transactions = document.getElementById("transactions");
    transactions.innerHTML = "";

    // EMPTY MONTH
    if (list.length === 0) {
        transactions.innerHTML = `
            <div style="text-align:center; padding:32px; color:#6b7280">
                <p style="margin-bottom:14px; font-size:15px;">
                    No transactions found
                </p>
                <button class="btn-primary" onclick="openForm()">
                    ＋ Add Expense
                </button>
            </div>
        `;
        return;
    }

    // TRANSACTIONS
    list.forEach(e => {
        const date = new Date(e.createdAt);

        const formattedDate = date.toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        const formattedTime = date.toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit"
        });

        transactions.innerHTML += `
            <div class="transaction-card" onclick="openDeleteModal('${e.id}')">
                <div class="transaction-left">
                    <strong class="tx-title">${e.title}</strong>
                    <div class="tx-meta">
                        ${e.category} • ${formattedDate} • ${formattedTime}
                    </div>
                    ${e.description ? `<div class="tx-desc">${e.description}</div>` : ""}
                </div>
                <div class="transaction-right">
                    ₹${e.amount.toFixed(2)}
                </div>
            </div>
        `;
    });
}

// UPDATE UI
export function updateUI() {
    const totalSpentEl = document.getElementById("totalSpent");
    const totalExpensesEl = document.getElementById("totalExpenses");
    const avgCostEl = document.getElementById("avgCost");
    const highestEl = document.getElementById("highest");
    const categoriesEl = document.getElementById("categories");

    const total = expenses.reduce((sum, e) => sum + e.amount, 0);

    totalSpentEl.textContent = `₹${total.toFixed(2)}`;
    totalExpensesEl.textContent = expenses.length;
    avgCostEl.textContent = `₹${(total / expenses.length || 0).toFixed(2)}`;
    highestEl.textContent =
        `₹${Math.max(...expenses.map(e => e.amount), 0).toFixed(2)}`;

    // TRANSACTION COUNT
    const count = expenses.length;
    document.getElementById("transactionCount").textContent =
        `${count} transaction${count !== 1 ? "s" : ""} this month`;

    // RENDER LIST
    if (isFilterActive) {
        renderTransactions(filteredExpenses);
    } else {
        renderTransactions(expenses);
    }

    // CATEGORY SUMMARY
    const catTotal = {};
    expenses.forEach(e => {
        catTotal[e.category] = (catTotal[e.category] || 0) + e.amount;
    });

    categoriesEl.innerHTML = "";
    for (let c in catTotal) {
        const percent = total ? (catTotal[c] / total) * 100 : 0;

        categoriesEl.innerHTML += `
            <div class="category-row">
                <div class="category-top">
                    <span>${c}</span>
                    <span>₹${catTotal[c].toFixed(2)}</span>
                </div>
                <div class="progress">
                    <div class="progress-fill" style="width:${percent}%"></div>
                </div>
            </div>
        `;
    }
}

// DOWNLOAD REPORT
function downloadReport() {
    if (!expenses.length) {
        alert("No transactions to download for this month.");
        return;
    }

    const year = currentDate.getFullYear();
    const monthName = currentDate.toLocaleDateString("en-US", { month: "long" });

    let csv = "Title,Category,Amount,Date,Time,Description\n";

    expenses.forEach(e => {
        const dateObj = new Date(e.createdAt);

        csv += `"${e.title}","${e.category}",${e.amount},"${dateObj.toLocaleDateString("en-IN")}","${dateObj.toLocaleTimeString("en-IN")}","${e.description || ""}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `Expense_Report_${monthName}_${year}.csv`;
    link.click();

    URL.revokeObjectURL(url);
}

window.downloadReport = downloadReport;
