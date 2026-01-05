import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3001/signup",
        { ...inputValue },
        { withCredentials: true }
      );

      console.log("SIGNUP RESPONSE:", data); // debug

      const { success, message, user } = data; // ✅ destructure user from backend

      if (success) {
  handleSuccess(message);

  // redirect with username in query param
  setTimeout(() => {
    window.location.href = `http://localhost:3002?username=${data.user.username}`;
  }, 1000);
}else {
        handleError(message);
        // reset form only on failure
        setInputValue({ email: "", password: "", username: "" });
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4">Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              className="form-control"
              placeholder="Enter your username"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
