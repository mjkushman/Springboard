import {useParams, Navigate} from 'react-router-dom'
 
function Dog({dogs}) {
    const {dogName} = useParams()
    
    // Find this dog in our list of known dogs.
    // If the dog doesn't exist, go back to the list of dogs.

    const thisDog = dogs.find(dog => dog.name.toLowerCase() == dogName.toLowerCase())
    if(!thisDog){
        return <Navigate to="/dogs"/>
    }
    // console.log(thisDog)

    return (
    <div className="m-12 ">

        <h2 className="text-xl" >Hello, my name is {thisDog.name}</h2>
        <img className='self-auto' src={thisDog.src}/>
        <p>Here are some fun facts about {thisDog.name}</p>
        {/* <p>{thisDog.name} is {thisDog.age}</p> */}
        {thisDog.facts? <ul>{thisDog.facts.map( fact => (<li>{fact}</li>) )} </ul> :'' }

    </div>
  )
}

export default Dog;
