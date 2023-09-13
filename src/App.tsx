import { Route, Routes } from 'react-router-dom'
import {Navbar, EmployeeForm, EmployeeList } from './components'

import './App.css'
import './components/styles/bootstrap.min.css'

function App() {
  
  return (
    <div>
      <Navbar   />

      <div className="container">
        <Routes>
          <Route path='/' element={<EmployeeList />} />
          <Route path='/create-employee' element={<EmployeeForm />} />
          <Route path='/edit-employee/:id' element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
