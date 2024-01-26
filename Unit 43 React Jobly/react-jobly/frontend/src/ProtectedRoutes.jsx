import {Outlet, Navigate} from 'react-router-dom'



const ProtectedRoutes = ({token}) => {
    console.log('protected route')
    return (
        token? <Outlet /> : <Navigate to="/login"/>
    )

}

export default ProtectedRoutes;