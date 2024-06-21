import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import CoursesPage from "./pages/courses/CoursesPage";
import RegisterPage from "./pages/register/RegisterPage";
import { SingleCoursePage } from "./pages/singleCourse/SingleCoursePage";
import { MeetingLayout } from "./pages/meeting/MeetingLayout";
import { Upcoming } from "./pages/meeting/container/Upcoming";
import { Previous } from "./pages/meeting/container/Previous";
import { Recordings } from "./pages/meeting/container/Recordings";
import { Personal } from "./pages/meeting/container/Personal";
import { HomeMeeting } from "./pages/meeting/container/HomeMeeting";
import MeetingPage from "./pages/meeting/MeetingPage";




export default function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/course/:id" element={<SingleCoursePage />} />
      <Route path="/meetingAction/:id" element={<MeetingPage />} />

      <Route path="/meeting" element={<MeetingLayout />}>
        <Route index element={<HomeMeeting />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="previous" element={<Previous />} />
        <Route path="recordings" element={<Recordings />} />
        <Route path="personal" element={<Personal />} />
      </Route>
    </Routes>
  );
}
