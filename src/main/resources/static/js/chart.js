const API_URL = "http://localhost:9090/api/expenses";

let chart = null;

// -------------------- MODAL --------------------

export function openChartModal() {
    document.getElementById("chartModal").style.display = "flex";
    setTimeout(showMonthlyChart, 100);
}

export function closeChartModal() {
    document.getElementById("chartModal").style.display = "none";
}

// -------------------- BUTTON TOGGLES --------------------

export async function showMonthlyChart() {
    setActive("month");
    const data = await groupByMonth();
    renderChart(data, "Monthly Expense Comparison");
}

export async function showYearlyChart() {
    setActive("year");
    const data = await groupByYear();
    renderChart(data, "Yearly Expense Comparison");
}

function setActive(type) {
    document.getElementById("monthBtn").className =
        type === "month" ? "btn-primary" : "btn-outline";

    document.getElementById("yearBtn").className =
        type === "year" ? "btn-primary" : "btn-outline";
}

// -------------------- FETCH ALL EXPENSES --------------------

async function fetchAllExpenses() {
    const res = await fetch(API_URL);
    return await res.json();
}

// -------------------- GROUPING LOGIC --------------------

async function groupByMonth() {
    const expenses = await fetchAllExpenses();
    const data = {};

    expenses.forEach(e => {
        const date = new Date(e.createdAt);

        const label = date.toLocaleString("default", {
            month: "short",
            year: "numeric"
        });

        data[label] = (data[label] || 0) + e.amount;
    });

    return data;
}

async function groupByYear() {
    const expenses = await fetchAllExpenses();
    const data = {};

    expenses.forEach(e => {
        const year = new Date(e.createdAt).getFullYear();
        data[year] = (data[year] || 0) + e.amount;
    });

    return data;
}

// -------------------- RENDER CHART --------------------

function renderChart(groupedData, title) {
    if (Object.keys(groupedData).length === 0) {
        alert("No data available for comparison");
        return;
    }

    const ctx = document
        .getElementById("expenseChart")
        .getContext("2d");

    if (chart) chart.destroy();

    // ✅ Sort labels chronologically
    const labels = Object.keys(groupedData).sort(
        (a, b) => new Date("1 " + a) - new Date("1 " + b)
    );

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels,
            datasets: [{
                label: title,
                data: labels.map(l => groupedData[l]),
                backgroundColor: "#6c63ff",
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => "₹" + value
                    }
                }
            }
        }
    });
}

// -------------------- GLOBAL --------------------

window.openChartModal = openChartModal;
window.closeChartModal = closeChartModal;
window.showMonthlyChart = showMonthlyChart;
window.showYearlyChart = showYearlyChart;
