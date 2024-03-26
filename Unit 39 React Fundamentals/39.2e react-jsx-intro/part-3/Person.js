const Person = ({name, age=0, hobbies}) => {
    
    let message
    if(age >= 18){
        message = "Please go vote!"
    } else {
        message = "You must be 18."
    }
    
    if(name.length > 8){
        name = name.slice(0,6)
    }
    
    
    

    return (
        <div>
        <p>Learn some information about this person:</p>
        <h2>Name: {name}</h2>
        <p>Age: {age}</p>
        <h3>Message to user:</h3>
        <p>{message}</p>
        <h3>Hobbies:</h3>
        <ul>
        {hobbies.map( h =>  (<li> {h} </li>) ) }
        </ul>
        </div>
    )
}