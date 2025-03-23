import axios from 'axios';

const baseUrl = '/api/auth';

async function register(userInfo) {
  const response = await axios.post(`${baseUrl}/register`, userInfo);
  return response.data;
}

async function login(credentials) {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
}

export default { register, login };
