import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home, {
  CoursesPage,
  AboutUsPage,
  TopPerformersPage,
  GalleryPage,
  ServicesPage,
  VerificationPage,
  LoginPage
} from './Pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/top_performers" element={<TopPerformersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/our_services" element={<ServicesPage />} />
        <Route path="/student_verification" element={<VerificationPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
