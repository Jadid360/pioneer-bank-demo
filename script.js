const loginBtn = document.querySelector("#login");
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// login Area
const loginArea = document.querySelector("#login-area");
// account-info
const accountsInfo = document.querySelector("#accounts-info");

// balance display
const balanceDisplay = document.querySelector("#balance-display");

// Initial Accounts Info
let _balance = 100;

// Login Button
loginBtn.addEventListener("click", function () {
  loginArea.style.display = "none";
  accountsInfo.style.display = "block";
});

// deposit
deposit.addEventListener("click", (e) => {
  // deposit display
  const depositInput = document.querySelector("#deposit-input");
  const depositDisplay = document.querySelector("#deposit-display");

  if (depositInput.value.length <= 0) {
    depositDisplay.textContent = "$ 00";
  } else {
    depositDisplay.textContent = `$ ${depositInput.value}`;
    const depositValue = parseInt(depositInput.value);
    _balance += depositValue;
    balanceDisplay.textContent = `$ ${_balance}`;
    depositInput.value = "";
  }
});

// withdraw
withdraw.addEventListener("click", (e) => {
  // withdraw display
  const withdrawDisplay = document.querySelector("#withdraw-display");
  const withdrawInput = document.querySelector("#withdraw-input");

  if (withdrawInput.value.length <= 0) {
    withdrawDisplay.textContent = "$ 00";
  } else {
    withdrawDisplay.textContent = `$ ${withdrawInput.value}`;
    const withdrawValue = parseInt(withdrawInput.value);
    _balance -= withdrawValue;

    balanceDisplay.textContent = `$ ${_balance}`;
    withdrawInput.value = "";
  }
});

// deposit input
// depositInput.addEventListener("input", (e) => {
//   let value = e.data;
//   console.log(value);
// });
