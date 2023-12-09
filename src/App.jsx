import { useState } from "react";
import passwordGenerator from "./hooks/passwordGenerator";
import "reactjs-popup/dist/index.css";
import PasswordStrengthIndicator from "./componets/passstrength";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase letters", state: false },
    { title: "Include Number", state: false },
    { title: "Include Lowercase letters", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedValue = [...checkboxData];
    updatedValue[i].state = !updatedValue[i].state;
    setCheckboxData(updatedValue);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  const { password, errorMessage, generatePassword } = passwordGenerator();
  return (
    <div className="p-[24px] bg-slate-300 w-[60%] mt-[10%] m-auto rounded-[10px] shadow-lg">
      {password && (
        <div className="flex justify-between pb-3">
          <div className="text-[28px] font-semibold flex justify-between">
            {password}
          </div>
          <button
            type="button"
            class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:focus:ring-gray-700 dark:border-gray-700"
            onClick={handleCopy}>
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      )}
      <div className="pb-3 text-[20px] font-[20px] m-2">
        <span className="flex justify-between">
          <label>Character length </label>
          <label className=" font-[600]">{length}</label>
        </span>
      </div>

      <input
        type="range"
        min={4}
        max={20}
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        }}
        class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />

      <div
        className="grid grid-cols-2 pt-3 gap-4  
      text-[17px] font-[400]">
        {checkboxData.map((checkbox, index) => {
          return (
            <div className="flex justify-center" key={index}>
              <input
                className="m-2"
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
                checked={checkbox.state}
              />
              <label>{checkbox.title}</label>
            </div>
          );
        })}
      </div>
      {password !== "" && <PasswordStrengthIndicator password={password} />}
      {errorMessage && (
        <div className="mt-1  mb-1 text-red-500 text-center font-semibold">
          Please check at least one box !
        </div>
      )}
      <button
        type="button"
        class="text-white bg-gray-800 hover:bg-gray-900focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4 w-[100%]"
        onClick={() => {
          setCopied(false);
          generatePassword(checkboxData, length);
        }}>
        GENERATE PASSWORD
      </button>
    </div>
  );
}

export default App;
