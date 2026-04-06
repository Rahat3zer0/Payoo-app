document.addEventListener("DOMContentLoaded", () => {

  let balance = 45000;

  const balanceEl = document.getElementById("balance");
  const amountInput = document.getElementById("amountInput");
  const pinInput = document.getElementById("pinInput");
  const withdrawBtn = document.getElementById("withdrawBtn");

  const updateBalance = () => {
    balanceEl.innerText = `$${balance}`;
  };

  const form = document.getElementById("cashoutForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop reload

  const amount = parseFloat(amountInput.value);
  const pin = pinInput.value;

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
    alert("Insufficient Balance");
    return;
  }

  balance -= amount;
  updateBalance();

  amountInput.value = "";
  pinInput.value = "";

  alert("Cashout Successful 💸");
});

  });
