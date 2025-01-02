import React, { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = () => {
    setIsSignUp((prev) => !prev);
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const loginWithMicrosoft = () => {
    window.location.href = "http://localhost:5000/auth/microsoft";
  };

  const loginWithGitHub = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  const loginWithLinkedIn = () => {
    window.location.href = "http://localhost:5000/auth/linkedin";
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (isSignUp) {
      // Send sign-up request to backend
      console.log("Sign-Up Data:", data);
    } else {
      // Send login request to backend
      console.log("Login Data:", data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          padding: "20px",
          background: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleFormSubmit} style={{ marginBottom: "20px" }}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group" style={{ marginTop: "10px" }}>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            style={{ marginTop: "20px" }}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
        <button
          className="btn btn-link"
          style={{ textDecoration: "none", marginBottom: "20px" }}
          onClick={toggleSignUp}
        >
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>
        {!isSignUp && (
          <>
            <p>Or login with:</p>
            <button
              className="btn btn-outline-danger btn-oauth"
              onClick={loginWithGoogle}
              style={{ margin: "10px 0" }}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                style={{ width: "16px", marginRight: "8px" }}
              />
              Google
            </button>
            <button
              className="btn btn-outline-primary btn-oauth"
              onClick={loginWithMicrosoft}
              style={{ margin: "10px 0" }}
            >
              <img
                src="https://c.s-microsoft.com/favicon.ico"
                alt="Microsoft"
                style={{ width: "16px", marginRight: "8px" }}
              />
              Microsoft
            </button>
            <button
              className="btn btn-outline-dark btn-oauth"
              onClick={loginWithGitHub}
              style={{ margin: "10px 0" }}
            >
              <img
                src="https://github.githubassets.com/favicon.ico"
                alt="GitHub"
                style={{ width: "16px", marginRight: "8px" }}
              />
              GitHub
            </button>
            <button
              className="btn btn-outline-info btn-oauth"
              onClick={loginWithLinkedIn}
              style={{ margin: "10px 0" }}
            >
              <img
                src="https://static-exp1.licdn.com/scds/common/u/images/logos/favicons/v1/favicon.ico"
                alt="LinkedIn"
                style={{ width: "16px", marginRight: "8px" }}
              />
              LinkedIn
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
