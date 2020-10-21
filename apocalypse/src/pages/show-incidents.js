import React from 'react'
import Dumpster from '../components/dumpster'

const ShowIncidents = (props) => {
    return (
        <div>
            <h1>This is the Show Incidents Page</h1>
            {/* {console.log(props)} */}
        {props.incidents.map((incident, index) => {
        return (
          <Dumpster key={index} incident={incident}/>
        )
      })}
        </div>
    )
}

export default ShowIncidents