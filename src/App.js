
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './ErrorException/ErrorBoundary';
import HomePage from './HomePage';
import NotFoundPage from './Error/NotFound';

const App = () => (
  <Router>
    <ErrorBoundary>
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

export default App;
