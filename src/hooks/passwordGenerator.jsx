import React, { useState } from "react";

const passwordGenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (checkboxData, length) => {
    let charset = "";
    let generatedPassword = "";

    const selectedOption = checkboxData.filter((checkbox) => checkbox.state);

    if (selectedOption.length === 0) {
      setErrorMessage("Select at least one option");
      setPassword("");
      return;
    }

    selectedOption.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase letters":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowercase letters":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Number":
          charset += "0123456789";
          break;
        case "Include Symbols":
          charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
          break;
        default:
          break;
      }
    });
    var a = charset.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += a[randIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };
  return { password, errorMessage, generatePassword };
};

export default passwordGenerator;
