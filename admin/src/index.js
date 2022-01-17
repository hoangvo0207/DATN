import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './contexts/authContext/AuthContext';
import { ListContextProvider } from './contexts/listContext/ListContext';
import { MovieContextProvider } from './contexts/movieContext/MovieContext';
import { RecommendContextProvider } from './contexts/recommendContext/RecommendContext';
import { UserContextProvider } from './contexts/userContext/UserContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <RecommendContextProvider>
              <App />
            </RecommendContextProvider>
          </UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
