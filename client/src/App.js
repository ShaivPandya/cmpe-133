import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import ViewAccount from './components/User/ViewAccount/ViewAccount';
import ViewOpenings from './components/User/ViewOpenings/ViewOpenings';
import ViewSubmittedApps from './components/User/ViewSubmittedApps/ViewSubmittedApps';
import JobPostingsList from './components/Business/JobPostingsListCompany/JobPostingsList';

import {SignInScreen, SignUpScreen} from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ViewAccount />} />
        <Route path="/sign-in" element={<SignInScreen />} />
        <Route path="/sign-up" element={<SignUpScreen />} />
        
        {/* Users */}
        <Route path="/view-openings" element={<ViewOpenings />} />
        <Route path="/view-submitted-applications" element={<ViewSubmittedApps />} />
        <Route path="/job" />
        <Route path="/application" />
        
        {/* Business */}
        <Route path="/create-job" />
        <Route path="/edit-job-posting" />
        <Route path="/view-applications" />
        <Route path="/view-application" />
        <Route path="/job-postings" element={<JobPostingsList />} />
      </Routes>
    </>
  );
}

export default App;
