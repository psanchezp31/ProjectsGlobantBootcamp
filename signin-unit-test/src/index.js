import "./styles.css";
import { processSignInButton } from "./signService";

let signinButton = document.getElementById("signin-button");

signinButton.addEventListener("click", (e) => {
  let email = document.getElementById("email-input").value;
  let password = document.getElementById("password-input").value;
  let message = document.getElementById("message-validator");

  e.preventDefault();
  processSignInButton(email, password, message);
});
