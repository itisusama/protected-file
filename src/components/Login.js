import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';

const Login = () => {

    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const hardcodedPassword = "onlybhayya"; // Replace "yourPassword" with the actual password you want to hard-code
    const handleSubmit = (e) => {
      e.preventDefault();
      if (password === hardcodedPassword) {
        login();
        navigate('/dashboard'); // Redirect to /dashboard if the password matches
      } else {
        alert("Incorrect Password!"); // Show an error message if the password is incorrect
      }
    };
  

  return (
    <div>
      <section className="w-full h-screen flex items-center justify-center text-white">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-center">
                  Enter The Passoword to Access the Files
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                      
                  <div>
                      <input type="password" name="password" id="password" placeholder="You Can Guess the Password" className="bg-transparent border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  
                  <button type="submit" className="w-full bg-red-700 text-white mt-4 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Enter</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
  )
}

export default Login
