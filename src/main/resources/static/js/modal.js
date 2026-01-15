// MODAL
export function openForm() {
    document.getElementById("modal").style.display = "flex";

    // Clear inputs
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("description").value = "";

    // Clear validation messages
    document.getElementById("titleError").textContent = "";
    document.getElementById("amountError").textContent = "";
    document.getElementById("categoryError").textContent = "";
}


export function closeForm() {
    document.getElementById("modal").style.display = "none";

    // Optional: reset form when cancelling
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").selectedIndex = 0;
    document.getElementById("description").value = "";
}

window.openForm = openForm;
window.closeForm = closeForm;
