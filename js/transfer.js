document.getElementById("transferForm")
  .addEventListener("submit", (e) => {

    e.preventDefault();

    // 🔥 Get balance from storage
    let balance = parseFloat(localStorage.getItem("balance")) || 45000;

    const amount = parseFloat(document.getElementById("amountInput").value);
    const pin = document.getElementById("pinInput").value;

    // ❌ Empty check
    if (!amount || !pin) {
      alert("Enter amount and PIN");
      return;
    }

    // ❌ PIN check
    if (pin !== "1234") {
      alert("Wrong PIN");
      return;
    }

    // ❌ Invalid amount
    if (amount <= 0) {
      alert("Invalid amount");
      return;
    }

    // ❌ Balance check (NOW WORKS PERFECTLY)
    if (amount > balance) {
      alert("Insufficient Balance ❌");
      return;
    }

    // ✅ Transfer
    balance -= amount;

    // 🔥 Save updated balance
    localStorage.setItem("balance", balance);

    // 🔥 Update UI
    document.getElementById("balance").innerText = `$${balance}`;

    // Clear inputs
    document.getElementById("amountInput").value = "";
    document.getElementById("pinInput").value = "";

    alert("Transfer Successful 💸");

});