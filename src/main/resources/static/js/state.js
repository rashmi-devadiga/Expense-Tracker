// GLOBAL STATE
export let currentDate = new Date();
export let expenses = [];
export let filteredExpenses = [];
export let isFilterActive = false;


// SETTERS
export function setCurrentDate(date) {
    currentDate = date;
}

export function setExpenses(data) {
    expenses = data;
}

export function setFilteredExpenses(data) {
    filteredExpenses = data;
}

export function setFilterActive(value) {
    isFilterActive = value;
}


