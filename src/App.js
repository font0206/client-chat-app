
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { useAuthContext } from './contexts/authContext';
import ChatRoom from './components/ChatRoom';

function App() {
  const { checkAuth } = useAuthContext();
  useEffect(() => {
    const authenticate = async () => {
        await checkAuth();
    };
    authenticate();
}, []);

  return (
    <div className="App">
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Login />}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/chat-room/*" element={<ChatRoom /> } /> 
                        <Route path="/register" element={<Register/> } /> 
                    
                
                        
                </Routes>
            </BrowserRouter>
           
             
        </div>
  );
}

export default App;
