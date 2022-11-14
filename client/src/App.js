import './App.css';
import { Route, Routes } from "react-router-dom"
import JobPostingsList from './components/Business/JobPostingsListCompany/JobPostingsList';

import { 
  SignInScreen, 
  SignUpScreen, 
  ViewAccountPage, 
  SubmittedApplicationsPage,
  JobOpenings
} from './pages';
import CreateJobPosting from './components/Business/CreateJobPosting/CreateJobPosting';

function App() {
  return (
    <>
      <Routes>
        {/* Both */}
        <Route path="/view-account" element={<ViewAccountPage />} />
        <Route path="/" element={<SignInScreen />} />
        
        <Route path="/view-role" />
        
        {/* Users */}
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/view-openings" element={<JobOpenings />} />
        <Route path="/view-submitted-applications" element={<SubmittedApplicationsPage />} />
        <Route path="/application" />
        
        {/* Business */}
        <Route path="/create-job" element={<CreateJobPosting />}/>
        <Route path="/edit-job-posting" />
        <Route path="/job-postings" element={<JobPostingsList />} />
        <Route path="/view-applications" />
        <Route path="/view-application" />
      </Routes>
    </>
  );
}

export default App;
