import React from 'react'
const Textdump = (props) => {
    return (
    
        <div>
            <input
                type ="text"
                defaultValue =""
                onKeyPress ={(e)=> props.onKeyPress(e,props.tag)}
                />
        </div>
    )
}

export default Textdump