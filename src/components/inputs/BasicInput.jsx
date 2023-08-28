import React, { forwardRef, useState } from "react";

const BasicInput = forwardRef(
  ({ name, label, type, placeholder, disabled, numberVerification }, ref) => {
    const [inputValue, setInputValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
      const { value } = e.target;
      console.log(value);
      if (type === "password") {
        if (value.length < 8) {
          setErrorMessage(
            "Recuerda que la contraseña debe tener al menos 8 caracteres"
          );
        } else {
          setErrorMessage("");
        }
      }
      //a method that help to remove the letters from the input only numbers can be entered
      if (numberVerification) {
        setInputValue(value.replace(/[^0-9]/g, ""));
        if (name === "dni") {
          if (value.length < 8) {
            setErrorMessage("Recuerda que el DNI debe tener 8 dígitos");
          } else {
            setErrorMessage("");
          }
        } else if (name === "phone") {
          if (value.length < 9) {
            setErrorMessage("Recuerda que el celular debe ser de 9 dígitos");
          } else {
            setErrorMessage("");
          }
        }
      } else {
        setInputValue(value);
      }
    };

    return (
      <div className="flex items-start w-full transition-all">
        <div class="grid space-y-2 w-full">
          <label class="text-gray-500" for={name}>
            {label}
          </label>
          <input
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            class={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500
        ${disabled ? "bg-gray-100" : "bg-white"}`}
            id={name.toLowerCase()}
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
          />
          {errorMessage && (
            <span className="text-gray-500 text-sm">{errorMessage}</span>
          )}
        </div>
      </div>
    );
  }
);

export default BasicInput;
