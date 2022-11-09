import './App.css';
import { Route, Routes, Link } from "react-router-dom"
import ViewAccount from './components/ViewAccount/ViewAccount';
import ViewOpenings from './components/ViewOpenings/ViewOpenings';
import ViewSubmittedApps from './components/ViewSubmittedApps/ViewSubmittedApps';

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
