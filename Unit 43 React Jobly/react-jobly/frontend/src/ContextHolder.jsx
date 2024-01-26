import { createContext, useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "./Navbar";
import UserContext from "./UserContext";
import JoblyApi from "../api";
import { jwtDecode } from 'jwt-decode'
import {useNavigate} from 'react-router-dom'


const ContextHolder = () => {
    const navigate = useNavigate()
    const LOCAL_STORAGE_KEY = 'token'
  
    // Create and store current user state. 
    // By default, will retrieve user from local storage. If user is null, then return an empty object.  Otherwise, parse the object and return it as currentUser.
    
    const [currentUser, setCurrentUser] = useState('')
    
    const [token, setToken] = useState(() => {
        try {
            const value = localStorage.getItem(LOCAL_STORAGE_KEY)
            if(value == null) return null;
            console.log('retrieved from localStorage:', value)        
            return JSON.parse(value)
        } catch (error) {
            console.log('error retrieving token:', error)    
        }
    })
  

    // Any time token is updated, store in localstorage and update currentUser
    useEffect(() => {
        const updateToken = () => {
            try {
                // set the token to local storage as string
                localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(token))
                JoblyApi.token = token // updates token for API

                if(!token) {
                    
                    return}
                setCurrentUser((currentUser) => jwtDecode(token))
                let decoded = jwtDecode(token)
                console.log('decoded',decoded)
            } catch (error) {
                console.log('error in updateToken',error)
            }
        }
        updateToken()
    },[token])



    // REGISTRATION form function to handle form submits
    async function signupFormSubmit(formData) {
        let res = await JoblyApi.registerUser({...formData})
        setToken(res) // sets the token with resposne from server
        // console.log('formSubmit called')
        currentUser.token = token
        console.log('register res',res)
    }

    // LOGIN form function. Let user log in.
    async function loginFormSubmit(formData) {
        try {
            let res= await JoblyApi.loginUser({...formData})
            console.log('before token', JoblyApi.token)
            setToken(res)
            JoblyApi.token = res
            console.log('after token', JoblyApi.token)
            // currentUser.token=token
        } catch (error) {
            console.log('login error:',error)    
        }
    }


    // Any time currentUser is updated, persist the newest data to local storage.
    // useEffect(() => {        
    //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentUser))
    //     console.log('set to local storage:', currentUser)
    // },[currentUser])




    const logoutUser =() => {
        // setCurrentUser('')
        localStorage.removeItem(LOCAL_STORAGE_KEY)
    }

  const context = {
    signupFormSubmit,
    currentUser,
    setCurrentUser,
    loginFormSubmit,
    logoutUser,
    token

  }

  
    return (
    <>
      <UserContext.Provider value={context}>
        <Navbar currentUser={currentUser}/>
        {/* Routes for the app */}
        <AppRoutes />
      </UserContext.Provider>
    </>
  );
};

export default ContextHolder;
