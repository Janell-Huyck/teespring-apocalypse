import React, {useState} from 'react'
import Summary from '../components/summary'
import Textdump from '../components/textdump'

const initialIncident = {
    human: "____",
    program: "____",
    event: "____",
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
            console.log("the key is", e.key)
            let copyValue = newValue
            console.log("copyvalue is", copyValue)
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
        }
        else if (tag==="program") { 
            let copyValue = {...newIncident}
            copyValue["program"]=newValue
            setNewIncident(copyValue)
        }
        else {
            let copyValue = {...newIncident}
            copyValue["event"]=newValue
            setNewIncident(copyValue)
        }

    }
    return (
        <div className = "createIncidentPage">
            <h1>What Fires Happened Recently?</h1>
            <div className="newFire" >
                <h2>Enter New Fire Data Here</h2>
                <div className = "culprit">
                    <h3>Who caused this fire?</h3>
                    <Textdump onKeyPress={onKeyPress} tag="human"/>
                </div>
                <div className = "fireProgram">
                    <h3>What was on fire?</h3>
                    <Textdump onKeyPress={onKeyPress} tag="program"/>
                </div>
                <div className = "fireEvent" >
                    <h3>I'm not sure what to put here.</h3>
                    <Textdump onKeyPress={onKeyPress} tag="event"/>
                </div>
            </div>
            <div className = "summaryFire">
                <h2>This is what we're getting ready to save.</h2>
                <Summary incident={newIncident}/>
            </div>
            <button className = "button saveFireButton" onClick={handleSave}>Save this Fire!</button>
        </div>
    )
}

export default CreateIncident