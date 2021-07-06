const EMAIL_VALID_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PASSWORD_VALID_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
export const EMPTY_STRING = "";

export function isValidEmail(email) {
  return EMAIL_VALID_REGEX.test(email);
}

export function isValidPassword(password) {
  return PASSWORD_VALID_REGEX.test(password);
}

/*
The password must contain at least 1 lowercase alphabetical character,
at least 1 uppercase alphabetical character, at least 1 numeric character,
at least one special character, must be eight characters or longer
*/

export function isPasswordInputEmpty(password) {
  return password === EMPTY_STRING;
}

export function isEmailInputEmpty(email) {
  return email === EMPTY_STRING;
}

export async function fetchData(emailJson, passwordJson) {
  const response = await (await fetch("./mock-users/user.json")).json();
  let findObject = response.find(
    ({ email, password }) => email === emailJson && password === passwordJson
  );
  return findObject
    ? { message: `Hello again ${findObject.name} !`, value: true }
    : {
        message: "Sorry, we can't find an account with these inputs.",
        value: false
      };
}

export function processSignInButton(email, password, messageElement) {
  let isPasswordEmpty = isPasswordInputEmpty(password);
  let isEmailEmpty = isEmailInputEmpty(email);

  if (isPasswordEmpty || isEmailEmpty) {
    messageElement.innerHTML = "Email and password are required fields";
  } else {
    let result = fetchData(email, password);
    result.then(({ message, value }) => {
      if (value === true) {
        messageElement.innerHTML = message;
        messageElement.style.color = "green";
        console.log(messageElement.innerHTML);
      } else {
        messageElement.innerHTML = message;
        messageElement.style.color = "#e50914";
      }
    });
  }
}
