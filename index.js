let email = document.querySelector("#mail");
let country = document.querySelector("#country");
let zip = document.querySelector("#zip");
let password = document.querySelector("#pass");
let c_pass = document.querySelector("#c_pass");
let message = document.querySelector(".message");
let btn = document.querySelector(".btn");

email.addEventListener("input", () => {
  emailValidity();
});
country.addEventListener("input", () => {
  countryValidity();
});
zip.addEventListener("input", () => {
  zipValidity();
});
password.addEventListener("input", () => {
  passwordValidity();
});
c_pass.addEventListener("input", () => {
  c_passValidity();
});

function emailValidity() {
  if (email.checkValidity()) {
    message.textContent = "";
  } else {
    message.textContent = "Enter a proper Email Address";
  }
}

function countryValidity() {
  if (country.checkValidity()) {
    message.textContent = "";
  } else {
    message.textContent = "Please enter a proper country name without numbers";
  }
}

function zipValidity() {
  if (zip.checkValidity()) {
    message.textContent = "";
  } else {
    message.textContent = "Please enter a six digit zip code";
  }
}

function passwordValidity() {
  if (password.checkValidity()) {
    message.textContent = "";
  } else {
    message.textContent =
      "Password should atleast contain 6 letters and max 15";
  }
}

function c_passValidity() {
  if (c_pass.checkValidity() && c_pass.value == password.value) {
    message.textContent = "";
    c_pass.style.border = "solid 2px green";
  } else {
    message.textContent = "Password doesn't match";
    c_pass.style.border = "solid 1px red";
  }
}

btn.addEventListener("click", () => {
  if (
    email.value == "" ||
    country.value == "" ||
    zip.value == "" ||
    password.value == "" ||
    c_pass.value == ""
  ) {
    message.textContent = "Please fill all the required details";
  } else if (
    !email.checkValidity() ||
    !country.checkValidity() ||
    !zip.checkValidity() ||
    !password.checkValidity() ||
    !c_pass.checkValidity()
  ) {
    message.textContent = "Please fill all the details in a valid manner";
  } else {
    message.textContent = "High Five ! Your details have been validated :)";
  }
});
