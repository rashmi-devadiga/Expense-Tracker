import { currentDate, setExpenses } from "./state.js";
import { updateUI } from "./ui.js";

const API_URL = "http://localhost:9090/api/expenses";

// ---------------- ADD EXPENSE ----------------
export async function addExpense() {

    const title = document.getElementById("title").value.trim();
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();

    document.getElementById("titleError").textContent = "";
    document.getElementById("amountError").textContent = "";
    document.getElementById("categoryError").textContent = "";

    let hasError = false;

    if (!title) {
        document.getElementById("titleError").textContent = "Please enter a title*";
        hasError = true;
    }

    if (!amount || amount <= 0) {
        document.getElementById("amountError").textContent = "Please enter a valid amount*";
        hasError = true;
    }

    if (!category) {
        document.getElementById("categoryError").textContent = "Please select a category*";
        hasError = true;
    }

    if (hasError) return;

    // ✅ FINAL DATE LOGIC (BEST PRACTICE)
    const now = new Date();

    const createdAt = `${currentDate.getFullYear()}-${
        String(currentDate.getMonth() + 1).padStart(2, "0")
    }-${String(now.getDate()).padStart(2, "0")}T${
        String(now.getHours()).padStart(2, "0")
    }:${String(now.getMinutes()).padStart(2, "0")}:00`;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            title,
            amount,
            category,
            description,
            createdAt
        })
    });

    document.getElementById("modal").style.display = "none";
    loadExpenses();
}


// ---------------- LOAD EXPENSES ----------------
export async function loadExpenses() {
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const res = await fetch(
        `${API_URL}/by-month?month=${month}&year=${year}`
    );

    const data = await res.json();
    setExpenses(data);
    updateUI();
}

// ---------------- DELETE ----------------
let selectedExpenseId = null;

function openDeleteModal(id) {
    selectedExpenseId = id;
    document.getElementById("deleteModal").style.display = "flex";
}

function closeDeleteModal() {
    selectedExpenseId = null;
    document.getElementById("deleteModal").style.display = "none";
}

export async function confirmDelete() {
    if (!selectedExpenseId) return;

    await fetch(`${API_URL}/${selectedExpenseId}`, {
        method: "DELETE"
    });

    closeDeleteModal();
    loadExpenses();
}

// ---------------- GLOBAL ----------------
window.addExpense = addExpense;
window.openDeleteModal = openDeleteModal;
window.closeDeleteModal = closeDeleteModal;
window.confirmDelete = confirmDelete;
