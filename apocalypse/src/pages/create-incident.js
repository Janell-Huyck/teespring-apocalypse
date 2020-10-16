import React, {useState} from 'react'

const initialIncident = {
    human: "henry",
    program: "big-rabbits",
    event: "appeared",
}


const CreateIncident = (props) => {
    const [newIncident, setNewIncident] = useState(initialIncident);

    const handleSave = () => {
        props.saveIncident(newIncident) 
    }


    return (
        <div>
            <h1>This is the Create Incident Page</h1>
            <button onClick={handleSave}>Save Henry!</button>
        </div>
    )
}

export default CreateIncident