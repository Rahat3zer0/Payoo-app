

    document.getElementById("bonusForm")
      .addEventListener("submit", (e) => {

        e.preventDefault();

        let balance = parseFloat(localStorage.getItem("balance")) || 45000;

        const coupon = document.getElementById("couponInput").value.trim();

        if (!coupon) {
          alert("Enter coupon code");
          return;
        }

        // 🎁 Simple coupon system
        if (coupon === "BONUS100") {
          balance += 100;
          alert("Bonus Added 💰 +100");
        } else if (coupon === "BONUS500") {
          balance += 500;
          alert("Bonus Added 💰 +500");
        } else {
          alert("Invalid Coupon ❌");
          return;
        }

        // Save + update
        localStorage.setItem("balance", balance);
        document.getElementById("balance").innerText = `$${balance}`;

        document.getElementById("couponInput").value = "";

    });
