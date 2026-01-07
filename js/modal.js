// MODAL 
export function openForm() {
  document.getElementById("modal").style.display = "flex";
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
