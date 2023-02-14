import React, { useState, setState } from "react";
// import "./style.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefult();
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <>
      <h2>Login</h2>
      <div className="form">
        <div className="form-body">
          <div className="username">
            <label className="form__label" for="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" for="lastName">
              Last Name{" "}
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              value={lastName}
              className="form__input"
              onChange={(e) => handleInputChange(e)}
              placeholder="LastName"
            />
          </div>
          <div className="email">
            <label className="form__label" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => handleInputChange(e)}
              placeholder="Email"
            />
          </div>
          <div className="password">
            <label className="form__label" for="password">
              Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => handleInputChange(e)}
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div>
          <button
            className="fotter"
            onClick={() => handleSubmit()}
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
