import { useState } from 'react';

export function ComposePage() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState('');

  const handleSend = async () => {
    if (!to || !subject || !body) {
      setStatus('⚠️ Popuni sva polja.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ to, subject, body }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('✅ Poruka uspešno poslata!');
        setTo('');
        setSubject('');
        setBody('');
      } else {
        setStatus(`❌ Greška: ${result.message || 'Nešto nije u redu.'}`);
      }
    } catch (error) {
      setStatus('❌ Server nije dostupan.');
    }
  };

  return (
    <div>
      <h2>📝 Napiši poruku</h2>

      <div style={styles.field}>
        <label>Primaoc:</label>
        <input
          type="email"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="npr. someone@example.com"
        />
      </div>

      <div style={styles.field}>
        <label>Naslov:</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div style={styles.field}>
        <label>Poruka:</label>
        <textarea
          rows={6}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button onClick={handleSend}>📤 Pošalji</button>

      {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
    </div>
  );
}

const styles = {
  field: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
  } as React.CSSProperties,
};
