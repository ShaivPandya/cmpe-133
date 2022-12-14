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
import ApplicationInformation from './components/Business/ApplicationInformation/ApplicationInformation';
import ApplicationsList from './components/Business/ApplicationListsPage/ApplicationLists';
import BusinessSignIn from './components/Business/BusinessSignIn/BusinessSignIn';
import EditJobPosting from './components/Business/EditJobPosting/EditJobPosting';
import JobPosting from './components/User/JobPosting/JobPosting';
import SubmittedApp from './components/User/SubmittedApp/SubmittedApp';

function App() {
  return (
    <>
      <Routes>
        {/* Both */}
        <Route path="/view-account" element={<ViewAccountPage />} />
        <Route path="/" element={<SignInScreen />} />
        
        <Route path="/view-role/:idJobs" element={<JobPosting />} />
        
        {/* Users */}
        <Route path="/sign-up" element={<SignUpScreen />} />
        <Route path="/view-openings" element={<JobOpenings />} />
        <Route path="/view-submitted-applications" element={<SubmittedApplicationsPage />} />
        <Route path="/application/:idApplication" element={<SubmittedApp />} />
        
        {/* Business */}
        <Route path="/business-sign-in" element={<BusinessSignIn />} />
        <Route path="/create-job" element={<CreateJobPosting />}/>
        <Route path="/edit-job/:idJobs" element={<EditJobPosting />} />
        <Route path="/job-postings" element={<JobPostingsList />} />
        <Route path="/view-applications/:idJobs" element={<ApplicationsList />} />
        <Route path="/view-application/:idApplication" element={<ApplicationInformation />} />
      </Routes>
    </>
  );
}

export default App;
