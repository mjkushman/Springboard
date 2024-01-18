// import './Nav.css'
import {Link} from 'react-router-dom'
 
function Nav({dogs}) {
  // console.log(dogs)
  return (
    <nav className='center grid grid-cols-5'>
      <Link to="/dogs" >Dogs </Link>
      {dogs.map(dog => (<div> <Link 
                                key={dog.name} 
                                to={`dogs/${dog.name.toLowerCase()}`}>
                                  {dog.name}
                                  </Link> </div>) ) }

    </nav>
  )
}

export default Nav;
