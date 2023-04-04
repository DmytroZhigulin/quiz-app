import axios from 'axios';

export default axios.create({
  baseURL: 'https://63f9f88abeec322c57eae484.mockapi.io',
  headers: { 'Content-Type': 'application/json' },
});