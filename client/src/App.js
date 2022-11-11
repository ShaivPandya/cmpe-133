import logo from './logo.svg';
import './App.css';
import ViewAccount from './components/User/ViewAccount/ViewAccount';
import ViewOpenings from './components/User/ViewOpenings/ViewOpenings';
import ViewSubmittedApps from './components/User/ViewSubmittedApps/ViewSubmittedApps';
import JobPostingsList from './components/Business/JobPostingsListCompany/JobPostingsList';

function App() {
  return (
    <div className="App">
      <JobPostingsList />
      <ViewAccount />
      <ViewOpenings />
      <ViewSubmittedApps />
    </div>
  );
}

export default App;
