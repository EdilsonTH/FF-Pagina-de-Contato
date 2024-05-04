function validateForm() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailError");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.innerHTML = "Por favor, insira um endereço de email valido.";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}
