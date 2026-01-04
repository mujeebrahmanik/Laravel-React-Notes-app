import { BrowserRouter,Routes,Router, Route, Navigate,useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import AppRoutes from "./AppRoutes";


export default function App() {
  return (
    <>
      
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes/>
          </AuthProvider>
      </BrowserRouter>

    </>
  );
}
