document.addEventListener("DOMContentLoaded", function () {

  let balance = 45000;

  const balanceEl = document.getElementById("balance");
  const amountInput = document.getElementById("amountInput");
  const pinInput = document.getElementById("pinInput");
  const addBtn = document.getElementById("addBtn");

  function updateBalance() {
    balanceEl.innerText = `$${balance}`;
  }

  addBtn.addEventListener("click", function () {

    const amount = parseFloat(amountInput.value);
    const pin = pinInput.value;

    // Empty check
    if (!amount || !pin) {
      alert("Enter amount and PIN");
      return;
    }

    // PIN check
    if (pin !== "1234") {
      alert("Wrong PIN");
      return;
    }

    // Invalid amount
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }

    // Add money
    balance += amount;
    updateBalance();

    // Clear fields
    amountInput.value = "";
    pinInput.value = "";

    alert("Money Added Successfully 💰");
    

  });
  

});
