import { Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { InboxPage } from './pages/InboxPage';
import { ComposePage } from './pages/ComposePage';

function App() {
  return (
    <div>
      <Navbar />

      {/* Dodaj osnovnu navigaciju */}
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>📥 Inbox</Link>
        <Link to="/compose">📝 Compose</Link>
      </nav>

      {/* Rute */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<InboxPage />} />
          <Route path="/compose" element={<ComposePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
