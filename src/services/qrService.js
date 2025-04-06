import axios from 'axios';

const API_URL = 'http://localhost:5000/api/qr';

export const generateQRCode = async (text) => {
  const res = await axios.post(API_URL, { text });
  return res.data;
};
