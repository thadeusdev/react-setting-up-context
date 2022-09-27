import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { PauseProvider } from './context/paused';

/*
- App
  - Counter
    - Controls
    - Likes
  - Comments
    - CommentList
      - Comment
    - CommentForm
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PauseProvider>
    <App />
  </PauseProvider>
);
