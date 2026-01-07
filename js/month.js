import {
  currentDate,
  setCurrentDate,
  setFilterActive,
  setFilteredExpenses
} from "./state.js";

import { loadExpenses } from "./expenses.js";

export function updateMonthUI() {
  const options = { month: "long", year: "numeric" };
  document.getElementById("currentMonth").textContent =
    currentDate.toLocaleDateString("en-US", options);
}

export function changeMonth(direction) {
  const nextDate = new Date(currentDate);
  nextDate.setMonth(nextDate.getMonth() + direction);

  if (nextDate > new Date()) return;

  setCurrentDate(nextDate);
  setFilterActive(false);
  setFilteredExpenses([]);

  updateMonthUI();
  loadExpenses();
}

window.changeMonth = changeMonth;
