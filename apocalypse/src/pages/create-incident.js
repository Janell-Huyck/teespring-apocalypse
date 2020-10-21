import React, {useState} from 'react'
import Summary from '../components/summary'
import Textdump from '../components/textdump'

const initialIncident = {
    human: "henry",
    program: "big-rabbits",
    event: "appear",
    day: "blobbyday"
}

const initialValue = ""

const CreateIncident = (props) => {
    const [newIncident, setNewIncident] = useState(initialIncident);
    const [newValue, setNewValue] = useState(initialValue)

    const handleSave = () => {
        props.saveIncident(newIncident) 
    }
    const onKeyPress =(e, tag) => {
        if (e.key==="Enter") {
            onSaveValue (tag)
        }
        else {
            
            let copyValue = newValue
            copyValue += e.key
            setNewValue(copyValue) 
            console.log (newValue)
        }
        
    }
    const onSaveValue = (tag) => {
        if (tag==="human") {
            
            let copyValue = {...newIncident}
            copyValue["human"]=newValue
            setNewIncident(copyValue)
            setNewValue("")
        }
        else if (tag==="program") { 
            let copyValue = {...newIncident}
            copyValue["program"]=newValue
            setNewIncident(copyValue)
            setNewValue("")
        }
        else if (tag==="event") {
            let copyValue = {...newIncident}
            copyValue["event"]=newValue
            setNewIncident(copyValue)
            setNewValue("")
        }
        else {
            let copyValue = {...newIncident}
            copyValue["day"]=newValue
            setNewIncident(copyValue)
            setNewValue("")
        }
    }
    return (
        <div>
            <h1>This is the Create Incident Page</h1>
            <h1>Who caused this fire?</h1>
            <Textdump onKeyPress={onKeyPress} tag="human"/>
            <h1>What was on fire?</h1>
            <Textdump onKeyPress={onKeyPress} tag="program"/>
            <h1>I'm not sure what to put here.</h1>
            <Textdump onKeyPress={onKeyPress} tag="event"/>
            <h1>what day did this occur?</h1>
            <Textdump onKeyPress={onKeyPress} tag="day"/>
            <h2>This is what we're getting ready to save.</h2>
                        <Summary incident={newIncident}/>
            <button onClick={handleSave}>Save Henry!</button>
        </div>
    )
}

export default CreateIncident