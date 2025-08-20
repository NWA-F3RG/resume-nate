export function Header() {
  return (
    <header className="text-center space-y-1">
      <h1>Nate Johnson</h1>
      <p>Full-Stack Developer & Systems Engineer</p>
      <div className="flex justify-center gap-4">
        <a href="mailto:nate@example.com">nate@example.com</a>
        <a href="https://github.com/nate" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/nate" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}
