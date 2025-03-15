import axios from 'axios';
const baseUrl = '/api/builds';

let token = null;
function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

async function getOne(id) {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function save(newBuild) {
  const config = { headers: { Authorization: token } };

  const response = await axios.post(baseUrl, newBuild, config);
  return response.data;
}

async function update(id, newBuild) {
  const response = await axios.put(`${baseUrl}/${id}`, newBuild);
  return response.data;
}

async function remove(id) {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
}

export default { getOne, getAll, save, update, remove, setToken };
