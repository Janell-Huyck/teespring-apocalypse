import React from 'react'
const Summary = (props) => {
    return (
    
        <div>
             Watch out!  {props.incident.human} caused {props.incident.program} to {props.incident.event}!
        </div>
    )
}

export default Summary