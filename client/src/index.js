import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './authContext/AuthContext';
import { FeedbackContextProvider } from './feedbackContext/FeedbackContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedbackContextProvider>
        <App />
      </FeedbackContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
