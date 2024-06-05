import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CVUpload from './jobs/cv-upload/page';
import Home from '@/home/page';
import Jobs from './jobs/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/jobs/cv-upload" element={<CVUpload />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;