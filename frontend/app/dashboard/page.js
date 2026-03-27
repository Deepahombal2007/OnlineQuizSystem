"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const router = useRouter();
  // In a real app, we would retrieve user info from the session or JWT token
  const [user, setUser] = useState({ name: "Student" });

  const handleSignOut = () => {
    // Clear user session/tokens here
    router.push("/login");
  };

  return (
    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
      <nav className="navbar">
        <h2>Quiz Wiz Dashboard</h2>
        <button onClick={handleSignOut} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
          Sign Out
        </button>
      </nav>

      <div className="dashboard-content">
        <h1 style={{ marginBottom: '2rem', fontSize: '2.5rem', textAlign: 'left', background: 'none', WebkitTextFillColor: 'initial', color: 'var(--text-main)' }}>
          Welcome back, {user.name}!
        </h1>
        
        <div className="dashboard-grid">
          <div className="stat-card">
            <h3>Quizzes Taken</h3>
            <p className="stat-number">12</p>
          </div>
          <div className="stat-card">
            <h3>Average Score</h3>
            <p className="stat-number">85%</p>
          </div>
          <div className="stat-card">
            <h3>Global Rank</h3>
            <p className="stat-number">#342</p>
          </div>
        </div>

        <h2 style={{ marginTop: '3rem', marginBottom: '1.5rem', textAlign: 'left' }}>Featured Quizzes</h2>
        <div className="quiz-list">
          <div className="quiz-card glass-card" style={{ padding: '1.5rem', textAlign: 'left', animation: 'none', maxWidth: '100%' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Intro to React</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Test your basic React hooks knowledge.</p>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Start Quiz</button>
          </div>
          
          <div className="quiz-card glass-card" style={{ padding: '1.5rem', textAlign: 'left', animation: 'none', maxWidth: '100%' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Advanced CSS</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Flexbox, Grid, and Animations.</p>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Start Quiz</button>
          </div>

          <div className="quiz-card glass-card" style={{ padding: '1.5rem', textAlign: 'left', animation: 'none', maxWidth: '100%' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Python Basics</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: 'var(--text-muted)' }}>Data structures and algorithms.</p>
            <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}
