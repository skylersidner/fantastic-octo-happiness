import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AlreadySent, Home, Question, SendCode, Success } from './components';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
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
