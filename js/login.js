const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const mobile = document.getElementById("mobileNumber").value.trim();
  const pin = document.getElementById("pinCode").value.trim();

  if (!mobile || !pin) {
    alert("Enter mobile & PIN");
    return;
  }

  if (!/^\d{4}$/.test(pin)) {
    alert("Invalid PIN");
    return;
  }

  window.location.href = "dashboard.html";
});