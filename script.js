const username = document.getElementById("username");
const form = document.querySelector("form");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (e) => {
  const errors = [];
  const Username = username.value;

  if (!Username.match(/[A-Z]+\w{3,11}[0-9!@#$%^&*]/g)) {
    errors.push("Username must start in uppercase, contain 5-12 letters and end with number or special character.")
  }

  if (errors.length > 0) {
    e.preventDefault();
    errorMessage.style.color = "red";
    errorMessage.hidden = false;
    errorMessage.innerHTML = errors.join(', ');
  } else {
    e.preventDefault();
    errorMessage.style.color = "green";
    errorMessage.hidden = false;
    errorMessage.innerHTML = "Username Valid.";
  }
})