import { v4 as uuidv4 } from 'uuid';

export function generateAnonymousUserId() {
  const anonymousUserId = uuidv4();
  localStorage.setItem('anonymousUserId', anonymousUserId);
  return anonymousUserId;
}

export function getAnonymousUserId() {
  let anonymousUserId = localStorage.getItem('anonymousUserId');

  if (!anonymousUserId) {
    anonymousUserId = generateAnonymousUserId();
  }

  return anonymousUserId;
}

export function clearAnonymousUserId() {
  localStorage.removeItem('anonymousUserId');
}
