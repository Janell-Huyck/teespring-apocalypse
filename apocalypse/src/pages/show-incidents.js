import React from 'react'

const ShowIncidents = (props) => {
    return (
        <div>
            <h1>This is the Show Incidents Page</h1>
        {props.incidents.map((incident) => {
        return (
          <div>
            {incident.human}
            {incident.program}
            {incident.event}
          </div>
        )
      })}
        </div>
    )
}

export default ShowIncidents