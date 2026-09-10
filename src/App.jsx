import './App.css'

function App() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">JobTrack</h2>

        <div className="nav-links">
          <a href="#">Dashboard</a>
          <a href="#">Applications</a>
          <a href="#">Add Application</a>
        </div>
      </nav>

      <main>
        <h1>JobTrack</h1>
        <p>Track your job applications in one place.</p>

        <section className="application-form">
          <h2>Add Job Application</h2>

          <form>
            <label>
              Company
              <input type="text" placeholder="e.g. Google" />
            </label>

            <label>
              Position
              <input
                type="text"
                placeholder="e.g. Junior Software Developer"
              />
            </label>

            <label>
              Application Date
              <input type="date" />
            </label>

            <label>
              Status
              <select>
                <option>Applied</option>
                <option>Interview</option>
                <option>Rejected</option>
                <option>Accepted</option>
              </select>
            </label>

            <label>
              Notes
              <textarea placeholder="Add any notes about this application..." />
            </label>

            <button type="submit">Add Application</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App