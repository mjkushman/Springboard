import {useContext} from 'react'
import UserContext from '../UserContext';
const Home = () => {

    const {currentUser} = useContext(UserContext)
    return (
    <>
      <div className="place-content min--h-full">
        
            {!currentUser
            ? (<>
                <h1 className="m-4 p-4">Welcome to Jobly.</h1>
                <div><a href='login'>Log in</a> or <a href='/signup'>sign up</a> to continue</div>
                </>
            )
        : (<>
            <h1 className="m-4 p-4">Welcome to Jobly.</h1>
            <div><a href='/companies'>Find a company</a> and apply to some <a href='/jobs'>jobs</a></div>
            </>
        )
        }
      </div>
    </>
  );
};

export default Home;
