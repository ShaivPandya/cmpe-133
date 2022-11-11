import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import ViewAccount from './components/User/ViewAccount/ViewAccount';
import ViewOpenings from './components/User/ViewOpenings/ViewOpenings';
import ViewSubmittedApps from './components/User/ViewSubmittedApps/ViewSubmittedApps';
import JobPostingsList from './components/Business/JobPostingsListCompany/JobPostingsList';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/ViewOpenings">View Openings</Link></li>
          <li><Link to="/ViewSubmittedApps">View Submitted Applications</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<ViewAccount />} />
        <Route path="/ViewOpenings" element={<ViewOpenings />} />
        <Route path="/ViewSubmittedApps" element={<ViewSubmittedApps />} />
      </Routes>
    </>
  );
}

export default App;
