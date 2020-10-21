import React from 'react'
const Textdump = (props) => {
    return (
    
        <div>
            <input
                type ="text"
                defaultValue =""
                onKeyDown ={(e)=> props.onKeyPress(e,props.tag)}
                />
        </div>
    )
}

export default Textdump