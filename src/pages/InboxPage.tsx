
import { useState } from 'react';

const dummyEmails = [
  {
    id: 1,
    sender: 'john@example.com',
    subject: 'Meeting Reminder',
    body: 'Don’t forget about our meeting tomorrow at 10am.',
  },
  {
    id: 2,
    sender: 'jane@example.com',
    subject: 'Project Update',
    body: 'The new version of the app has been deployed to production.',
  },
  {
    id: 3,
    sender: 'support@barrierfreemail.com',
    subject: 'Welcome!',
    body: 'Thank you for trying Barrier-Free Mail. Enjoy your experience!',
  },
];

export function InboxPage() {
  const [selectedEmail, setSelectedEmail] = useState<typeof dummyEmails[0] | null>(null);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // možeš dinamički menjati prema jeziku
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <h2>📥 Inbox</h2>
      
      {/* Lista mejlova */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dummyEmails.map(email => (
          <li
            key={email.id}
            style={{ padding: '0.5rem', borderBottom: '1px solid #ccc', cursor: 'pointer' }}
            onClick={() => setSelectedEmail(email)}
          >
            <strong>{email.subject}</strong><br />
            <small>From: {email.sender}</small>
          </li>
        ))}
      </ul>

      {/* Detalji poruke */}
      {selectedEmail && (
        <div style={{ marginTop: '1rem' }}>
          <h3>{selectedEmail.subject}</h3>
          <p><strong>From:</strong> {selectedEmail.sender}</p>
          <p>{selectedEmail.body}</p>
          <button onClick={() => speak(selectedEmail.body)}>🔊 Pročitaj naglas</button>
        </div>
      )}
    </div>
  );
}
