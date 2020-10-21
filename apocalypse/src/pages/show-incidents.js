import React from 'react'
import Dumpster from '../components/dumpster'

const ShowIncidents = (props) => {
    return (
        <div className="showIncidentsPage">
            <h1>Welcome Back!</h1>
            <h2>Unfortunately, while you were gone, bad things happened...</h2>
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