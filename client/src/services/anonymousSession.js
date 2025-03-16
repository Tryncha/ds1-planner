import { v4 as uuidv4 } from 'uuid';

function getSessionId() {
  let sessionId = localStorage.getItem('anonymousSessionId');

  if (!sessionId) {
    sessionId = uuidv4();
    localStorage.setItem('anonymousSessionId', sessionId);
  }

  return sessionId;
}

function clearSessionId() {
  localStorage.removeItem('anonymousSessionId');
}

export default { getSessionId, clearSessionId };
