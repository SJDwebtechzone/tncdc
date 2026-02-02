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
import ProfilePage from '@/components/ProfilePage';
import DesignationsPage from '@/components/DesignationsPage';
import PlaceholderPage from '@/components/PlaceholderPage';
import ExamGrade from '@/components/ExamGrade';
import Subjects from '@/components/Subjects';

import LanguagesPage from '@/components/LanguagesPage';
import CourseCategoriesPage from '@/components/CourseCategoriesPage';
import CourseAwardCategoriesPage from '@/components/CourseAwardCategoriesPage';
import ManageCoursesPage from '@/components/ManageCoursesPage';

import CourseVideosPage from '@/components/CourseVideosPage';
import CourseNotesPage from '@/components/CourseNotesPage';
import CourseReviewsPage from '@/components/CourseReviewsPage';
import OnlineClassesPage from '@/components/OnlineClassesPage';
import ManageBatchesPage from '@/components/ManageBatchesPage';

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
          <Route path="exam-grade" element={<ExamGrade />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="users/designations" element={<DesignationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="course/categories" element={<CourseCategoriesPage />} />
          <Route path="course/award-categories" element={<CourseAwardCategoriesPage />} />
          <Route path="courses" element={<ManageCoursesPage />} />
          <Route path="course/videos" element={<CourseVideosPage />} />
          <Route path="course/notes" element={<CourseNotesPage />} />
          <Route path="course/reviews" element={<CourseReviewsPage />} />
          <Route path="online-classes" element={<OnlineClassesPage />} />
          <Route path="batches" element={<ManageBatchesPage />} />
          <Route path="*" element={<PlaceholderPage />} />
        </Route>
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
