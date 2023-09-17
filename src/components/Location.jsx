import React from "react";

export default function Location(props){

    const[error, setError] = React.useState({})
    var isAllowed = false

    function handleLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude} =  position.coords;
                        isAllowed = true
                        props.fromLocation(latitude, longitude, isAllowed)
                    },
                    (error) => {
                        setError(`Error: ${error.message}`)
                    }
                )
            } else {setError("unable to get the location")}
    }

    React.useEffect(() =>{
        handleLocation()

    }, [])

    return (
        <div>
        </div>

    )


}