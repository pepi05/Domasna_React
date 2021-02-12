const Car = (props) => {
    return (
    <div id='car'>
        {/* <h4>Your car model is: {props.carModel}</h4> */}

        <h2>Car informations:</h2>
            <p>Car type: {props.info.type}</p>
            <p>Car model: {props.info.model}</p>
            <p>Color: {props.info.color}</p>
            <p>Doors number: {props.info.doors}</p>

            {props.info.hatchback 
            ?
             props.info.doors += 1
            :
            <p>Not hatchback</p>
            }

    </div>    
    
    )
}

export default Car;