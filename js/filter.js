import {
  expenses,
  setFilteredExpenses,
  setFilterActive
} from "./state.js";

import { renderTransactions } from "./ui.js";

export function applyFilter() {
  const type = document.getElementById("filterType").value;
  let list = [...expenses];

  // Alphabetical
  if (type === "az") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Amount sorting
  if (type === "lowHigh") {
    list.sort((a, b) => a.amount - b.amount);
  }

  if (type === "highLow") {
    list.sort((a, b) => b.amount - a.amount);
  }

  // Filter by date
  if (type === "date") {
    const selected = document.getElementById("filterDate").value;
    if (!selected) return;

    list = expenses.filter(e => {
      const d = e.createdAt?.toDate
        ? e.createdAt.toDate()
        : new Date(e.createdAt);

      return d.toISOString().split("T")[0] === selected;
    });
  }

  // Filter by category
  if (type === "category") {
    const cat = document.getElementById("filterCategory").value;
    if (!cat) return;

    list = expenses.filter(e => e.category === cat);
  }

  setFilteredExpenses(list);
  setFilterActive(true);

  closeFilterModal();
  renderTransactions(list);
}

// MODAL
function openFilterModal() {
  document.getElementById("filterModal").style.display = "flex";
}

function closeFilterModal() {
  document.getElementById("filterModal").style.display = "none";
}

// CATEGORY DROPDOWN
function populateCategories() {
  const select = document.getElementById("filterCategory");
  select.innerHTML = "";

  [...new Set(expenses.map(e => e.category))].forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
}

// EVENTS
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("filterType").addEventListener("change", e => {
    const type = e.target.value;

    document.getElementById("filterDate").style.display =
      type === "date" ? "block" : "none";

    document.getElementById("filterCategory").style.display =
      type === "category" ? "block" : "none";

    if (type === "category") populateCategories();
  });
});

// expose to HTML
window.openFilterModal = openFilterModal;
window.closeFilterModal = closeFilterModal;
window.applyFilter = applyFilter;
