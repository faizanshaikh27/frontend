import React, { useState } from 'react';
import QRCodeDisplay from '../components/QRCodeDisplay';
import { generateQRCode } from '../services/qrService';

const Home = () => {
  const [text, setText] = useState('');
  const [qrImage, setQrImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!text.trim()) {
      setError('Please enter some text');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const { qrImage } = await generateQRCode(text);
      setQrImage(qrImage);
    } catch (err) {
      setError('Failed to generate QR Code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '0 auto' }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate QR Code'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {qrImage && <QRCodeDisplay qrImage={qrImage} />}
    </div>
  );
};

export default Home;
