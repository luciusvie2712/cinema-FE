import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from  "./routes/AppRoutes.jsx"
import { AuthProvider } from './context/AuthContext.jsx'

function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  )
}

export default App
