import React from "react";

const PasswordStrengthIndicator = ({ password = "" }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength === 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const passwordStrength = getPasswordStrength();

  if (!passwordStrength) return <React.Fragment />;
  return (
    <div className="mt-2 ml-3 mr-3  flex justify-between">
      Strength <span className=" font-semibold">{passwordStrength}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
