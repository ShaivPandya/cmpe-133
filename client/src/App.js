import logo from './logo.svg';
import './App.css';
import ViewAccount from './components/ViewAccount/ViewAccount';
import ViewOpenings from './components/ViewOpenings/ViewOpenings';
import ViewSubmittedApps from './components/ViewSubmittedApps/ViewSubmittedApps';

function App() {
  return (
    <div className="App">
      <ViewAccount />
      <ViewOpenings />
      <ViewSubmittedApps />
    </div>
  );
}

export default App;
