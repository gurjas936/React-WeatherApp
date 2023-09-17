import React from "react";
import './Input.css'
export default function Input(props){

    const[input, setInput] = React.useState("")

    function handleSubmit(e){
        e.preventDefault()
        props.setLocation(input)
        setInput("")
    }

    return (
        <div className="header">
            <form className="input" onSubmit={handleSubmit}>
                <input 
                    className="location"
                    type="text" 
                    placeholder="Search Location"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>
                <button className="searchbtn" type="submit"></button>
            </form>
            
        </div>
    )

}