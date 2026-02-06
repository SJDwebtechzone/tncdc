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
import AddSubjectPage from '@/components/AddSubjectPage';
import BirthdayListPage from '@/components/BirthdayListPage';
import HelpSupportPage from '@/components/HelpSupportPage';
import IdCardPrintPage from '@/components/IdCardPrintPage';
import AdmissionsPage from '@/components/AdmissionsPage';
import AddAdmissionPage from '@/components/AddAdmissionPage';

import StudentWalletPage from '@/components/StudentWalletPage';
import UpcomingInstallmentsPage from '@/components/UpcomingInstallmentsPage';
import PaidInstallmentsPage from '@/components/PaidInstallmentsPage';
import PaymentHistoryPage from '@/components/PaymentHistoryPage';

import WalletTransactionsPage from '@/components/WalletTransactionsPage';

import LanguagesPage from '@/components/LanguagesPage';
import CourseCategoriesPage from '@/components/CourseCategoriesPage';
import CourseAwardCategoriesPage from '@/components/CourseAwardCategoriesPage';
import ManageCoursesPage from '@/components/ManageCoursesPage';
import AddCoursePage from '@/components/AddCoursePage';

import CourseVideosPage from '@/components/CourseVideosPage';
import CourseNotesPage from '@/components/CourseNotesPage';
import CourseReviewsPage from '@/components/CourseReviewsPage';
import OnlineClassesPage from '@/components/OnlineClassesPage';
import ManageBatchesPage from '@/components/ManageBatchesPage';

import StudentListPage from '@/components/StudentListPage';
import AddStudentPage from '@/components/AddStudentPage';
import StudentEnquiriesPage from '@/components/StudentEnquiriesPage';
import PopupsPage from '@/components/PopupsPage';
import StudentNotificationsPage from '@/components/StudentNotificationsPage';

import EnquiriesFollowUpsPage from '@/components/EnquiriesFollowUpsPage';

import HolidaysPage from '@/components/HolidaysPage';
import LeaveManagementPage from '@/components/LeaveManagementPage';
import AttendanceReportPage from '@/components/AttendanceReportPage';
import AddAttendancePage from '@/components/AddAttendancePage';
import AttendanceQRPage from '@/components/AttendanceQRPage';
import WeekOffDaysPage from '@/components/WeekOffDaysPage';

import StaffListPage from '@/components/StaffListPage';
import StaffAttendancePage from '@/components/StaffAttendancePage';
import StaffLeavesPage from '@/components/StaffLeavesPage';
import StaffSalaryPage from '@/components/StaffSalaryPage';
import StaffLecturesPage from '@/components/StaffLecturesPage';

import InventoryCategoriesPage from '@/components/InventoryCategoriesPage';
import InventoryProductsPage from '@/components/InventoryProductsPage';
import StudentInventoryPage from '@/components/StudentInventoryPage';
import ManageUsersPage from '@/components/ManageUsersPage';
import ManageRolesPage from '@/components/ManageRolesPage';

import ExpenseTypesPage from '@/components/ExpenseTypesPage';
import ExpenseSubTypesPage from '@/components/ExpenseSubTypesPage';
import ExpensesPage from '@/components/ExpensesPage';
import HDICertificatesPage from '@/components/HDICertificatesPage';
import BackgroundImagesPage from '@/components/BackgroundImagesPage';
import OffersPage from '@/components/OffersPage';

import ExamRequestsPage from '@/components/ExamRequestsPage';
import UpdateMarksPage from '@/components/UpdateMarksPage';
import ApplyCertificatesPage from '@/components/ApplyCertificatesPage';
import ApprovedCertificatesPage from '@/components/ApprovedCertificatesPage';
import RequestedCertificatesPage from '@/components/RequestedCertificatesPage';

import GenerateHallTicketsPage from '@/components/GenerateHallTicketsPage';
import MockTestsPage from '@/components/MockTestsPage';
import FinalExamsPage from '@/components/FinalExamsPage';

import WebsiteTopPerformersPage from '@/components/WebsiteTopPerformersPage';
import WebsiteServicesPage from '@/components/WebsiteServicesPage';
import WebsiteFAQsPage from '@/components/WebsiteFAQsPage';
import WebsiteTestimonialsPage from '@/components/WebsiteTestimonialsPage';
import WebsiteTeachersPage from '@/components/WebsiteTeachersPage';
import WebsiteCountersPage from '@/components/WebsiteCountersPage';
import WebsiteEventsPage from '@/components/WebsiteEventsPage';
import WebsiteAboutPage from '@/components/WebsiteAboutPage';
import WebsiteBannersPage from '@/components/WebsiteBannersPage';
import WebsiteMobileBannersPage from '@/components/WebsiteMobileBannersPage';
import WebsiteSampleCertificatesPage from '@/components/WebsiteSampleCertificatesPage';
import WebsiteAffiliationsPage from '@/components/WebsiteAffiliationsPage';
import WebsitePaymentDetailsPage from '@/components/WebsitePaymentDetailsPage';
import WebsitePoliciesPage from '@/components/WebsitePoliciesPage';
import WebsiteSocialMediaPage from '@/components/WebsiteSocialMediaPage';
import WebsiteSiteSettingPage from '@/components/WebsiteSiteSettingPage';
import WebsiteJobApplicationsPage from '@/components/WebsiteJobApplicationsPage';
import WebsiteJobsPage from '@/components/WebsiteJobsPage';
import WebsiteAddJobPage from '@/components/WebsiteAddJobPage';
import WebsiteStudyMaterialsPage from '@/components/WebsiteStudyMaterialsPage';
import WebsiteMissionVisionPage from '@/components/WebsiteMissionVisionPage';
import WebsiteContactPage from '@/components/WebsiteContactPage';
import WebsitePostsPage from '@/components/WebsitePostsPage';
import WebsiteAddPostPage from '@/components/WebsiteAddPostPage';
import WebsiteGalleryPage from '@/components/WebsiteGalleryPage';
import WebsitePartnersPage from '@/components/WebsitePartnersPage';

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
          <Route path="add-subject" element={<AddSubjectPage />} />
          <Route path="users/designations" element={<DesignationsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="languages" element={<LanguagesPage />} />
          <Route path="course/categories" element={<CourseCategoriesPage />} />
          <Route path="course/award-categories" element={<CourseAwardCategoriesPage />} />
          <Route path="fees/upcoming" element={<UpcomingInstallmentsPage />} />
          <Route path="fees/paid" element={<PaidInstallmentsPage />} />
          <Route path="fees/history" element={<PaymentHistoryPage />} />
          <Route path="fees/wallet" element={<StudentWalletPage />} />
          <Route path="fees/wallet/transactions" element={<WalletTransactionsPage />} />
          <Route path="courses" element={<ManageCoursesPage />} />
          <Route path="courses/add" element={<AddCoursePage />} />
          <Route path="course/videos" element={<CourseVideosPage />} />
          <Route path="course/notes" element={<CourseNotesPage />} />
          <Route path="course/reviews" element={<CourseReviewsPage />} />
          <Route path="online-classes" element={<OnlineClassesPage />} />
          <Route path="batches" element={<ManageBatchesPage />} />
          <Route path="students/birthday-list" element={<BirthdayListPage />} />
          <Route path="students/help-support" element={<HelpSupportPage />} />
          <Route path="students/id-card-print" element={<IdCardPrintPage />} />
          <Route path="students/admissions" element={<AdmissionsPage />} />
          <Route path="students/admissions/add" element={<AddAdmissionPage />} />
          <Route path="students/list" element={<StudentListPage />} />
          <Route path="students/list/add" element={<AddStudentPage />} />
          <Route path="students/enquiries" element={<StudentEnquiriesPage />} />
          <Route path="students/enquiry-followups" element={<EnquiriesFollowUpsPage />} />
          <Route path="students/popups" element={<PopupsPage />} />
          <Route path="students/notifications" element={<StudentNotificationsPage />} />

          {/* Exam Routes */}
          <Route path="exams/hall-tickets" element={<GenerateHallTicketsPage />} />
          <Route path="exams/mock-tests" element={<MockTestsPage />} />
          <Route path="exams/final" element={<FinalExamsPage />} />
          <Route path="exams/requests" element={<ExamRequestsPage />} />
          <Route path="exams/marks" element={<UpdateMarksPage />} />

          {/* Certificate Routes */}
          <Route path="certificates/apply" element={<ApplyCertificatesPage />} />
          <Route path="certificates/approved" element={<ApprovedCertificatesPage />} />
          <Route path="certificates/requested" element={<RequestedCertificatesPage />} />

          {/* Attendance Routes */}
          <Route path="attendance/report" element={<AttendanceReportPage />} />
          <Route path="attendance/add" element={<AddAttendancePage />} />
          <Route path="attendance/qr" element={<AttendanceQRPage />} />
          <Route path="attendance/leave" element={<LeaveManagementPage />} />
          <Route path="attendance/holidays" element={<HolidaysPage />} />
          <Route path="attendance/week-off" element={<WeekOffDaysPage />} />

          {/* Staff Management Routes */}
          <Route path="staff/list" element={<StaffListPage />} />
          <Route path="staff/attendance" element={<StaffAttendancePage />} />
          <Route path="staff/leaves" element={<StaffLeavesPage />} />
          <Route path="staff/salary" element={<StaffSalaryPage />} />
          <Route path="staff/lectures" element={<StaffLecturesPage />} />

          {/* Inventory Routes */}
          <Route path="inventory/categories" element={<InventoryCategoriesPage />} />
          <Route path="inventory/products" element={<InventoryProductsPage />} />
          <Route path="inventory/student" element={<StudentInventoryPage />} />

          {/* Expense Routes */}
          <Route path="expenses/types" element={<ExpenseTypesPage />} />
          <Route path="expenses/subtypes" element={<ExpenseSubTypesPage />} />
          <Route path="expenses/list" element={<ExpensesPage />} />

          {/* New Routes Based on User Selection */}
          <Route path="hdi-certificate" element={<HDICertificatesPage />} />
          <Route path="backgrounds" element={<BackgroundImagesPage />} />
          <Route path="offers" element={<OffersPage />} />

          {/* User Management Routes */}
          <Route path="users/manage" element={<ManageUsersPage />} />
          <Route path="users/roles" element={<ManageRolesPage />} />

          {/* Website Management Routes */}
          <Route path="website/top-performers" element={<WebsiteTopPerformersPage />} />
          <Route path="website/services" element={<WebsiteServicesPage />} />
          <Route path="website/faqs" element={<WebsiteFAQsPage />} />
          <Route path="website/testimonials" element={<WebsiteTestimonialsPage />} />
          <Route path="website/teachers" element={<WebsiteTeachersPage />} />
          <Route path="website/counters" element={<WebsiteCountersPage />} />
          <Route path="website/events" element={<WebsiteEventsPage />} />
          <Route path="website/about" element={<WebsiteAboutPage />} />
          <Route path="website/banner" element={<WebsiteBannersPage />} />
          <Route path="website/mobile-banner" element={<WebsiteMobileBannersPage />} />
          <Route path="website/sample-certificates" element={<WebsiteSampleCertificatesPage />} />
          <Route path="website/affiliations" element={<WebsiteAffiliationsPage />} />
          <Route path="website/payment-details" element={<WebsitePaymentDetailsPage />} />
          <Route path="website/policies" element={<WebsitePoliciesPage />} />
          <Route path="website/social-media" element={<WebsiteSocialMediaPage />} />
          <Route path="website/site-setting" element={<WebsiteSiteSettingPage />} />
          <Route path="website/job-applications" element={<WebsiteJobApplicationsPage />} />
          <Route path="website/jobs" element={<WebsiteJobsPage />} />
          <Route path="website/jobs/add" element={<WebsiteAddJobPage />} />
          <Route path="website/study-materials" element={<WebsiteStudyMaterialsPage />} />
          <Route path="website/mission-vision" element={<WebsiteMissionVisionPage />} />
          <Route path="website/contact" element={<WebsiteContactPage />} />
          <Route path="website/posts" element={<WebsitePostsPage />} />
          <Route path="website/posts/add" element={<WebsiteAddPostPage />} />
          <Route path="website/gallery" element={<WebsiteGalleryPage />} />
          <Route path="website/partners" element={<WebsitePartnersPage />} />

          <Route path="*" element={<PlaceholderPage />} />
        </Route>
        {/* Fallback to home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
