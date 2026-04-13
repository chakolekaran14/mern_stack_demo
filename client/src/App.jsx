import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AddNewStudent from './mycomponents/AddNewStudent'
import { LoginPage } from './mycomponents/authdemo/LoginPage'
import { RegistationPage } from './mycomponents/authdemo/RegistationPage'
import NavbarDemo from './mycomponents/NavbarDemo'
import './App.css'
import ReadAllStudentRecords from './mycomponents/ReadAllStudentRecords'
import EditStudent from './mycomponents/EditStudent'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './mycomponents/ProtectedRoute'
function App() {


  return (
    <>
      <NavbarDemo />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistationPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path='/students' element={<ReadAllStudentRecords />} />
        <Route path='/add-student' element={<AddNewStudent />} />
        <Route path='/edit-student/:id' element={<EditStudent />} />
      </Routes>

    </>
  )
}

export default App
