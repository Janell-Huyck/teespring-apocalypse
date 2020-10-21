import React, {useState} from 'react';
import './App.css';
import CreateIncident from './pages/create-incident'
import ShowIncidents from './pages/show-incidents'

const initialPage = "createIncident"
const initialIncidents = []


const App = () => {
  const [whichPage, setWhichPage] = useState(initialPage);
  const [incidents, setIncidents] = useState(initialIncidents);



  const togglePage = () => {
    if (whichPage === 'createIncident') {
      setWhichPage("showIncidents")
    }
    else {
      setWhichPage("createIncident")
    }
  }

  const saveIncident = (data) => {
    let oldIncidents = incidents
    oldIncidents.push(data)
    setIncidents(oldIncidents)
  }

  return (
    <div>
      <button className = "button viewToggleButton" onClick = {togglePage}>Switch View</button>
      {whichPage === "createIncident" ? <CreateIncident saveIncident = {saveIncident}/> : <ShowIncidents incidents = {incidents}/>}
    </div>
  );
}

export default App;
