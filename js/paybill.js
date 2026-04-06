document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("paybillForm");
  const balanceEl = document.getElementById("balance");

  // Load balance
  let balance = parseFloat(localStorage.getItem("balance")) || 45000;
  balanceEl.innerText = `$${balance}`;

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const amount = parseFloat(document.getElementById("amountInput").value);
    const pin = document.getElementById("pinInput").value;

    if (!amount || !pin) {
      alert("Enter amount and PIN");
      return;
    }

    if (pin !== "1234") {
      alert("Wrong PIN");
      return;
    }

    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }

    if (amount > balance) {
      alert("Insufficient Balance ❌");
      return;
    }

    // ✅ Pay bill
    balance -= amount;

    localStorage.setItem("balance", balance);
    balanceEl.innerText = `$${balance}`;

    document.getElementById("amountInput").value = "";
    document.getElementById("pinInput").value = "";

    alert("Bill Paid Successfully ✅");

  });

});