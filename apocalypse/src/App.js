import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CreateIncident from './pages/create-incident'
import ShowIncidents from './pages/show-incidents'

const initialPage = "createIncident"
const App = () => {
const [whichPage, setWhichPage] = useState(initialPage);

  const togglePage = () => {
    if (whichPage == 'createIncident') {
      setWhichPage("showIncidents")
    }
    else {
      setWhichPage("createIncident")
    }
  }

  return (
    <div>
      {whichPage == "createIncident" ? <CreateIncident/> : <ShowIncidents/>}
      <button onClick = {togglePage}>Switch View</button>
    </div>
  );
}

export default App;
