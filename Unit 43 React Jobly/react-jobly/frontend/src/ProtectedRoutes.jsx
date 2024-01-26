import { useContext } from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import UserContext from './UserContext'



const ProtectedRoutes = () => {
    const {token} = useContext(UserContext)
    // console.log('protected route, token is', token)
    return (
        token? <Outlet /> : <Navigate to="/login"/>
    )

}

export default ProtectedRoutes;