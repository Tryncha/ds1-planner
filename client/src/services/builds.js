import axios from 'axios';
import anonymousSession from './anonymousSession';
const baseUrl = '/api/builds';

let token = null;
function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

async function getOne(id) {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
}

async function getUserBuilds() {
  const sessionId = anonymousSession.getSessionId();

  const config = token ? { headers: { Authorization: token } } : { headers: { 'X-Anonymous-Session': sessionId } };

  const response = await axios.get(`${baseUrl}/user-builds`, config);
  return response.data;
}

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function save(newBuild) {
  const sessionId = anonymousSession.getSessionId();
  const config = token ? { headers: { Authorization: token } } : { headers: { 'X-Anonymous-Session': sessionId } };

  const response = await axios.post(baseUrl, newBuild, config);
  return response.data;
}

async function update(id, newBuild) {
  const sessionId = anonymousSession.getSessionId();
  const config = token ? { headers: { Authorization: token } } : { headers: { 'X-Anonymous-Session': sessionId } };

  const response = await axios.put(`${baseUrl}/${id}`, newBuild, config);
  return response.data;
}

async function remove(id) {
  const sessionId = anonymousSession.getSessionId();
  const config = token ? { headers: { Authorization: token } } : { headers: { 'X-Anonymous-Session': sessionId } };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
}

// This will be called after successful login
async function migrateAnonymousBuilds() {
  if (!token) return null;

  const sessionId = anonymousSession.getSessionId();
  const config = {
    headers: {
      'Authorization': token,
      'X-Anonymous-Session': sessionId
    }
  };

  const response = await axios.post(`${baseUrl}/migrate-anonymous`, {}, config);
  // After successful migration, clear the anonymous session
  anonymousSession.clearSessionId();
  return response.data;
}

export default { getOne, getAll, getUserBuilds, save, update, remove, setToken, migrateAnonymousBuilds };
