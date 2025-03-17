import { v4 as uuidv4 } from 'uuid';

export function generateAnonymousSession() {
  const anonymousSession = uuidv4();
  localStorage.setItem('anonymousSession', anonymousSession);
  return anonymousSession;
}

export function getAnonymousSession() {
  let anonymousSession = localStorage.getItem('anonymousSession');

  if (!anonymousSession) {
    anonymousSession = generateAnonymousSession();
  }

  return anonymousSession;
}

export function clearAnonymousSession() {
  localStorage.removeItem('anonymousSession');
}
