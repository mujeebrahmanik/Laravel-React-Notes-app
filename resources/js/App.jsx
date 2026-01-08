import { BrowserRouter,Routes,Router, Route, Navigate,useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import AppRoutes from "./AppRoutes";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function App() {
  return (
    <>
      
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes/>
          </AuthProvider>
      </BrowserRouter>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />

    </>
  );
}
