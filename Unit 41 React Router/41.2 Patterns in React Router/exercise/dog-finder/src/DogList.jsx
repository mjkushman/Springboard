import {Link} from 'react-router-dom'
 
function DogList({dogs}) {
  // console.log(dogs)
  return (
    <div className="m-12">
    <h1 className="text-3xl font-bold underline ">Whats up dog</h1>
    <h2 className='mt-8'>These are some real dogs</h2>

      {dogs.map(dog => (<div> <Link key={dog.name} to={dog.name.toLowerCase()}> {dog.name}</Link> </div>) ) }

    </div>
  )
}

export default DogList;
