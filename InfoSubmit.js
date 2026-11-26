document.getElementById("name").addEventListener("input", validateName);
function validateName() {
  var x = document.forms["Input"]["name"];
  if (x == "") {
    valid = false;
    form.name.setAttribute("aria-invalid", "true");
  } else {
    form.name.removeAttribute("aria-invalid");
  }
}
document.getElementById("email").addEventListener("input", validateEmail);
function validateEmail() {
  const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    valid = false;
    form.email.setAttribute("aria-invalid", "true");
    event.preventDefault();
  } else {
    form.email.removeAttribute("aria-invalid");
    event.preventDefault();
  }
}
document.getElementById("submit").addEventListener("submit", printlog);
function printlog() {
  event.preventDefault();
  var data = document.getElementById("Input");
  console.log(JSON.stringify(data, null, 2));
}
