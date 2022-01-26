import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './contexts/authContext/AuthContext';
import { FeedbackContextProvider } from './contexts/feedbackContext/FeedbackContext';
import { UserContextProvider } from './contexts/userContext/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedbackContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </FeedbackContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
