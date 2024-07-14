import React, { useState } from "react";

export default function SignUpForm() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;

  // Username
  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  // Password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // Confirm Password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [confirmPwdFocus, setConfirmPwdFocus] = useState(false);

  // Errors
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  function handleUsername(e) {
    setUsername(e.target.value);
    setValidUsername(usernameRegex.test(e.target.value));
  }

  function handlePassword(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPwdFocus(true);
    setValidPassword(passwordRegex.test(password));
  }

  function handleConfirmPassword(e) {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    setValidConfirmPassword(password === newConfirmPassword);
  }

  function handleSubmit(e) {
    if (validUsername && validConfirmPassword && validPassword) {
      return alert("You have successfully signed up");
    } else {
      return alert("Somethings not right dumbfuck");
    }
  }

  return (
    <form className="signup-form">
      <h2>Sign Up</h2>
      {/* Username */}
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleUsername}
          required
        />
      </div>
      {/* Email */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      {/* Password */}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        {!validPassword && pwdFocus ? (
          <p>
            At least one uppercase letter. At least one lowercase letter. At
            least one digit. At least one special character. Minimum of 12
            characters.
          </p>
        ) : (
          ""
        )}

        <input
          type="password"
          id="password"
          name="password"
          required
          onChange={handlePassword}
          onFocus={() => setConfirmPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
      </div>
      {/* Confirm Password */}
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        {!validConfirmPassword && confirmPwdFocus ? (
          <p>Passwords don't match</p>
        ) : (
          ""
        )}
        <input
          type="password"
          id="confirmPassword"
          name="password"
          required
          onChange={handleConfirmPassword}
          onFocus={() => setConfirmPwdFocus(true)}
          onBlur={() => setConfirmPwdFocus(false)}
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Sign Up
      </button>
    </form>
  );
}
