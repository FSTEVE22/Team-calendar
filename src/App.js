import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Calendar from './pages/calendar';
import Signin from './pages/sign_in'
import Roles from './pages/roles';
import Actions from './pages/actions';
import Utilisateurs from './pages/utilisateurs';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Signin />}></Route>
      <Route path='/calendar' element={<Calendar />}></Route>
      <Route path='/roles' element={<Roles />}></Route>
      <Route path='/typeActions' element={<Actions />}></Route>
      <Route path='/utilisateurs' element={<Utilisateurs />}></Route>
    </Routes>
  );
}

export default App;