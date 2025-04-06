import React from 'react';

const QRCodeDisplay = ({ qrImage }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = qrImage;
    link.download = 'qr-code.png';
    link.click();
  };

  return (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
      <img src={qrImage} alt="QR Code" style={{ width: '250px' }} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleDownload}>Download QR Code</button>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
