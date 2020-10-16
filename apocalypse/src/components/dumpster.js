import React from 'react'
import CreateIncident from '../pages/create-incident'
const Dumpster = (props) => {
    return (
    
        <div>
             Watch out!  {props.incident.human} caused {props.incident.program} to {props.incident.event}!
        </div>
    )
}

export default Dumpster