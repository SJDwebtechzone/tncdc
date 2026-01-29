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
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import DesignationsPage from '@/components/DesignationsPage';
import PlaceholderPage from '@/components/PlaceholderPage';

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
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users/designations" element={<DesignationsPage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
