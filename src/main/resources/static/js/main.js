console.log("MAIN JS LOADED");

import "./expenses.js";   // 🔥 MUST BE FIRST
import "./modal.js";
import "./filter.js";
import "./ui.js";
import "./month.js";
import "./chart.js";

import { updateMonthUI } from "./month.js";
import { loadExpenses } from "./expenses.js";
import { setCurrentDate } from "./state.js";   // ✅ ADD THIS

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM READY");

    // ✅ RESET CURRENT DATE ON EVERY PAGE LOAD
    const today = new Date();
    setCurrentDate(today);

    updateMonthUI();
    loadExpenses();
});
