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
        <div className = "createIncidentPage">
            <h1>What Fires Happened Recently?</h1>
            <div className="newFire" >
                <h2>Enter New Fire Data Here</h2>
                <div className = "newFireTrait">
                    <h3>Culprit:</h3>
                    <Textdump onKeyPress={onKeyPress} tag="human"/>
                </div>
                <div className = "newFireTrait">
                    <h3>Program or System:</h3>
                    <Textdump onKeyPress={onKeyPress} tag="program"/>
                </div>
                <div className = "newFireTrait" >
                    <h3>Event Details: </h3>
                    <Textdump onKeyPress={onKeyPress} tag="event"/>
                </div>
                <div className = "newFireTrait" >
                    <h3>Timeframe: </h3>
                    <Textdump onKeyPress={onKeyPress} tag="day"/>
                </div>
            </div>   
            <div className = "summaryFire">
                <h2 className = "summaryFireTitle">This is what we're getting ready to save.</h2>
                <Summary incident={newIncident}/>
            </div>
            
            <button className = "button saveFireButton" onClick={handleSave}>Save this Fire!</button>
        </div>
    )
}

export default CreateIncident