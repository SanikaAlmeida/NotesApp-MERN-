import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import { validateEmail } from '../../utils/validate';
import axiosinstance from '../../utils/axiosinstance';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)
    const navigate=useNavigate()

    const handlelogin=async(e)=>{
        e.preventDefault();
         if(!validateEmail(email)){
            setError("Please enter valid email address")
            return
         }
         if(!password){
            setError("Please enter the password")
            return
         }
         setError("")

         try {
            const response = await axiosinstance.post('/login', { email:email, password:password });
            if(response.data && response.data.token)
            {
                localStorage.setItem('token', response.data.token); 
                navigate('/home')
            }
          } 
          catch (error) {
            setError('Invalid email or password');
          }
    };
    
  return (
    <>
        <Navbar />
        <div className="flex items-center justify-center mt-28"> 
            <div className="w-96 border rounded bg-white px-7 py-10">
                <form onSubmit={handlelogin}>
                    <h4 className="text-2xl mb-7">Login</h4>
                    <input type="text" placeholder="Email" className="input-box" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="input-box" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
                    <button type="submit" className="btn-primary">
                    Login 
                    </button>
                    <p className="text-sm text-center mt-4">
                        Not registered yet?{" "}
                        <Link to="/signup" className="font-medium text-primary underline">
                        Create an Account
                        </Link>
                     </p>
                </form>
            </div>
        </div>
    </>
    )
}

export default Login