import React from 'react'
import Dumpster from '../components/dumpster'

const ShowIncidents = (props) => {
    return (
        <div>
            <h1>This is the Show Incidents Page</h1>
            <Dumpster/>
        {props.incidents.map((incident) => {
        return (
          <Dumpster incident={incident}/>
      )})}
        </div>
    )
}

export default ShowIncidents