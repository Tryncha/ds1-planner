import axios from 'axios';
const baseUrl = '/api/users';

async function getUserById(id) {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

export default { getUserById };
