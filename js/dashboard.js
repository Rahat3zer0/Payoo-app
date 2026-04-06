document.addEventListener("DOMContentLoaded", () => {

  const logoutBtn = document.getElementById("logoutBtn");
  const addMoneyBtn = document.getElementById("addMoneyBtn");
  const cashoutBtn = document.getElementById("cashoutBtn");

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Add Money
  if (addMoneyBtn) {
    addMoneyBtn.addEventListener("click", () => {
      window.location.href = "addmoney.html";
    });
  }

  // Cashout
  if (cashoutBtn) {
    cashoutBtn.addEventListener("click", () => {
      window.location.href = "cashout.html";
    });
  }

});