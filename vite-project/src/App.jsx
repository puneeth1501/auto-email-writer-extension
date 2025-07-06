import React, { useState } from 'react';

const API_BASE_URL = 'http://localhost:8080/api/email';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('professional');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateEmail = async () => {
    if (!emailContent.trim()) {
      setError('Please enter email content');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const result = await fetch(`${API_BASE_URL}/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emailContent: emailContent,
          tone: tone
        })
      });

      if (result.ok) {
        const data = await result.text();
        setResponse(data);
      } else {
        setError('Failed to generate email');
      }
    } catch (err) {
      setError('Failed to generate email: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Email Generator</h1>
      
      {error && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#ffebee', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '20px'
        }}>
          {error}
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Email Content:
        </label>
        <textarea
          value={emailContent}
          onChange={(e) => setEmailContent(e.target.value)}
          placeholder="Enter the email content you want to reply to..."
          rows={8}
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            resize: 'vertical'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Tone:
        </label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px',
            width: '200px'
          }}
        >
          <option value="professional">Professional</option>
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
        </select>
      </div>

      <button
        onClick={generateEmail}
        disabled={loading}
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
          opacity: loading ? 0.6 : 1
        }}
      >
        {loading ? 'Generating...' : 'Generate Email'}
      </button>

      {response && (
        <div style={{ marginTop: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Generated Email:
          </label>
          <textarea
            value={response}
            readOnly
            rows={10}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
              backgroundColor: '#f9f9f9',
              resize: 'vertical'
            }}
          />
          <button
            onClick={() => navigator.clipboard.writeText(response)}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              marginTop: '10px'
            }}
          >
            Copy to Clipboard
          </button>
        </div>
      )}

      {loading && (
        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          fontSize: '16px',
          color: '#666'
        }}>
          Generating your email response...
        </div>
      )}
    </div>
  );
}

export default App;