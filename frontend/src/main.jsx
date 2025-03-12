import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { CharacterContextProvider } from './context/CharacterContext.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CharacterContextProvider>
      <App />
    </CharacterContextProvider>
  </StrictMode>
);
