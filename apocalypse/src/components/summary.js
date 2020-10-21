import React from 'react'
const Summary = (props) => {
    return (
    
        <div className = "summaryFireText">
             Watch out!  {props.incident.human} caused {props.incident.program} to {props.incident.event} on {props.incident.day}!
        </div>
    )
}

export default Summary