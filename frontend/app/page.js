export default function Home() {
  return (
    <main className="hero-section">
      <div className="glass-card">
        <h1>Quiz Wiz</h1>
        <p>Test your knowledge with our premium online quiz platform. Challenge yourself across dozens of categories.</p>
        <div className="button-group">
          <a href="/login" className="btn btn-secondary">Sign In</a>
          <a href="/register" className="btn btn-primary">Sign Up</a>
        </div>
      </div>
    </main>
  );
}
