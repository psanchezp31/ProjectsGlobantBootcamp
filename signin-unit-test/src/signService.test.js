import {
  EMPTY_STRING,
  isValidEmail,
  isValidPassword,
  isEmailInputEmpty,
  isPasswordInputEmpty,
  fetchData
} from "./signService";

describe("Validate signin escenarios", () => {
  test("Should return true for a valid email", () => {
    let email = "paula123@hotmail.com";
    expect(isValidEmail(email)).toBeTruthy();
  });

  test("Should return false for a invalid email", () => {
    let email = "paula @123hotmail com";
    expect(isValidEmail(email)).toBeFalsy();
  });

  test("Should return true for a valid password", () => {
    let password = "I4mL34rningJS!!";
    expect(isValidPassword(password)).toBeTruthy();
  });

  test("Should return false for a invalid password", () => {
    let password = "1090";
    expect(isValidPassword(password)).toBeFalsy();
  });

  test("Should return true for an empty email input", () => {
    expect(isEmailInputEmpty(EMPTY_STRING)).toBeTruthy();
  });

  test("Should return false for an filled email input", () => {
    expect(isEmailInputEmpty("paula.sanchez@gmail.com")).toBeFalsy();
  });

  test("Should return true for an empty email input", () => {
    expect(isPasswordInputEmpty(EMPTY_STRING)).toBeTruthy();
  });

  test("Should return false for an filled email input", () => {
    expect(isPasswordInputEmpty("I4mL34rningJS!!")).toBeFalsy();
  });

  test("Should show Hello again if the inputs are found in the Json", async () => {
    let email = "henry@gmail.com";
    let password = "Java11-Java8";
    let data = await fetchData(email, password);

    expect(data.value).toBeTruthy();
    expect(data.message).toEqual(data["message"]);
  });

  test("Should show error message if the inputs are not found in the Json", async () => {
    let email = "henry11@gmail.com";
    let password = "Java11-Java8";
    let data = await fetchData(email, password);

    expect(data.value).toBeFalsy();
    expect(data.message).toEqual(data["message"]);
  });
});
