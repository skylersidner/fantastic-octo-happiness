import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

// import './index.css';
import App from './App';
import { AlreadySent, Home, Question, SendCode, Success } from './routes';
const apiUrl = process.env.REACT_APP_API_URL;
if (!apiUrl) {
  throw new Error('No apiUrl could be found.')
}
console.log('apiUrl: ', apiUrl)
const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache({ resultCaching: false })
});

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<ApolloProvider client={client}><App /></ApolloProvider>}>
            <Route path="home" element={<Home />} />
            <Route path="question" element={<Question />} />
            <Route path="send-code" element={<SendCode />} />
            <Route path="success" element={<Success />} />
            <Route path="already-sent" element={<AlreadySent />} />
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);