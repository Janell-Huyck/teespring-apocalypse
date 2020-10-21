import React from 'react'
const Dumpster = (props) => {
    return (
        <div className = "dumpster">
            {props.incident.human} caused {props.incident.program} to {props.incident.event}!
        </div>
            )
}

export default Dumpster