import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from "./components/Login";

export default function App() {
  return (
   <div class="absolute top-0 z-[-2] w-full min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
   </div>
  )
}