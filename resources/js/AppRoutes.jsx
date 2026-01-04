import React from 'react'
import { useAuth } from './context/AuthContext';
import { BrowserRouter, Routes, Router, Route, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Task from "./components/Task";
import Login from "./components/Login";
import Register from "./components/Register";





function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}


function GuestRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
}

const AppRoutes = () => {
  return (
    <Routes>
      
      {/* Routes WITH navbar */}
      <Route element={<AppLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        />
      </Route>

      {/* Routes WITHOUT navbar */}
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
      <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

    </Routes>
  )
}

export default AppRoutes