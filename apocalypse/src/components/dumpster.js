import React from 'react'
const Dumpster = (props) => {
    return (
    
        <div>
             Watch out!  {props.incident.human} caused {props.incident.program} to {props.incident.event} on {props.incident.day}!
        </div>
            )
}

export default Dumpster