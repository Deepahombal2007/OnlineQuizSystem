"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="hero-section">
      <div className="glass-card">
        <h1>Create Account</h1>
        <p>Join our premium quiz platform and test your skills.</p>
        
        {status === "success" ? (
          <div className="success-message">
            <h2>Account created successfully!</h2>
            <p>Welcome aboard. You can now sign in.</p>
            <Link href="/login" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              Go to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-input"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-input"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {status === "error" && (
              <p className="error-text">Failed to create account. Please try again.</p>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: '100%', marginTop: '1rem' }}>
              {status === "submitting" ? "Creating Account..." : "Sign Up"}
            </button>
            
            <p style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '0.9rem' }}>
              Already have an account? <Link href="/login" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Sign in here</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
