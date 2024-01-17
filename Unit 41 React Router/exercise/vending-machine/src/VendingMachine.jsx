import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Popcorn from './Popcorn'
import Spam from './Spam'
import Cookies from './Cookies'
import Nav from './Nav'

const VendingMachine =()=>{
    

    return (
        <>
            <BrowserRouter>
            <h2>Here are some snacks you can buy</h2>
            <Nav/>
            <Routes>
                <Route path="/popcorn" element={<Popcorn/>}/>
                <Route path="/spam" element={<Spam/>}/>
                <Route path="/cookies" element={<Cookies/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default VendingMachine