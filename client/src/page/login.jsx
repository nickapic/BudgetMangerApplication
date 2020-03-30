import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success sir");
  };
  return (
    <div className="form-section" onSubmit={e => onSubmit(e)}>
      <h2 className="form-section_label">Log in here</h2>
      <form className="form-section_form">
        <div className="form-control">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Your Email here"
            onChange={e => onChange(e)}
            value={email}
            required
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password here"
            onChange={e => onChange(e)}
            value={password}
            required
          />
        </div>
        <input type="submit" className="form-input-btn" value="Log in" />
      </form>
      <span className="form-section-login">
        Don't have a account? <Link to="/signup">Register here</Link>
      </span>
    </div>
  );
};
