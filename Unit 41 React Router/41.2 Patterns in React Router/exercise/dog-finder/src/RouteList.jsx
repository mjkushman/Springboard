import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import DogList from './DogList';
import Dog from './Dog';
import Nav from './Nav';

function RouteList({dogs}) {

  return (
    <>
    <Routes>
      <Route path="/dogs/:dogName" element={<Dog dogs={dogs}/>}/>
      <Route path="/dogs" element={<DogList dogs={dogs}/>}/>
      <Route path="*" element={<Navigate to="/dogs" />}/>
    </Routes>
    </>
  )
}

export default RouteList;
