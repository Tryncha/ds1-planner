import axios from 'axios';
import { getAnonymousUserId, clearAnonymousUserId } from './anonymousUserId';
const baseUrl = '/api/builds';

let token = null;
function setToken(newToken) {
  token = `Bearer ${newToken}`;
}

async function getBuildById(game, id) {
  const response = await axios.get(`${baseUrl}/${game}/${id}`);
  return response.data;
}

async function getUserBuilds() {
  const config = {};

  if (token) {
    config.headers = { Authorization: token };
  } else {
    const anonymousUserId = getAnonymousUserId();
    config.headers = { 'X-Anonymous-User-Id': anonymousUserId };
  }

  const response = await axios.get(`${baseUrl}/user-builds`, config);
  return response.data;
}

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function saveGameBuild(game, newBuild) {
  const config = {};

  if (token) {
    config.headers = { Authorization: token };
  } else {
    const anonymousUserId = getAnonymousUserId();
    config.headers = { 'X-Anonymous-User-Id': anonymousUserId };
  }

  const response = await axios.post(`${baseUrl}/${game}`, newBuild, config);
  return response.data;
}

async function updateGameBuild(game, id, newBuild) {
  const config = {};

  if (token) {
    config.headers = { Authorization: token };
  } else {
    const anonymousUserId = getAnonymousUserId();
    config.headers = { 'X-Anonymous-User-Id': anonymousUserId };
  }

  const response = await axios.put(`${baseUrl}/${game}/${id}`, newBuild, config);
  return response.data;
}

async function deleteGameBuild(game, id) {
  const config = {};

  if (token) {
    config.headers = { Authorization: token };
  } else {
    const anonymousUserId = getAnonymousUserId();
    config.headers = { 'X-Anonymous-User-Id': anonymousUserId };
  }

  const response = await axios.delete(`${baseUrl}/${game}/${id}`, config);
  return response.data;
}

// This will be called after successful login
async function migrateAnonymousBuilds() {
  if (!token) return null;

  const anonymousUserId = getAnonymousUserId();
  const config = {
    headers: {
      'Authorization': token,
      'X-Anonymous-User-Id': anonymousUserId
    }
  };

  const response = await axios.post(`${baseUrl}/migrate-anonymous`, {}, config);
  // After successful migration, clear the anonymous id
  clearAnonymousUserId();
  return response.data;
}

export default {
  getBuildById,
  getAll,
  getUserBuilds,
  saveGameBuild,
  updateGameBuild,
  deleteGameBuild,
  setToken,
  migrateAnonymousBuilds
};
