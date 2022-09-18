const mailInput = document.querySelector("input[type='email']");
const form = document.querySelector("form");
const error = document.querySelector(".error");
let checked = false;

const checkMail = (input) => {
  const mailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  checked = mailRegx.test(input) ? true : false;
  return checked;
};
mailInput.addEventListener("input", (e) => {
  checkMail(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (checked) {
    error.textContent = "";
  } else {
    error.textContent = "This email is not valid, check it up !";
  }
});
