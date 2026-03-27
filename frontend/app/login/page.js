"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Signin error:", error);
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="hero-section">
      <div className="glass-card">
        <h1>Welcome Back</h1>
        <p>Sign in to continue testing your knowledge.</p>
        
        {status === "success" ? (
          <div className="success-message">
            <h2>Signed in successfully!</h2>
            <p>Redirecting to dashboard...</p>
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
              <p className="error-text">Failed to sign in. Please check your credentials.</p>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: '100%', marginTop: '1rem' }}>
              {status === "submitting" ? "Signing In..." : "Sign In"}
            </button>
            
            <p style={{ marginTop: '1.5rem', marginBottom: 0, fontSize: '0.9rem' }}>
              Don't have an account? <Link href="/signup" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Sign up here</Link>
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
