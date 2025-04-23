import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Login = () => {

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { backendUrl, setShowLogin, setToken, setUser } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {

            if (state === 'Login') {

                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }

            } else {

                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }

            }



        } catch (error) {
            toast.error(error.message)
        }
    }



    useEffect(() => {
        // Disable scrolling on body when the login is open
        document.body.style.overflow = 'hidden';

        // Cleanup function to re-enable scrolling
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center bg-black/40 backdrop-blur-lg'>
            <motion.form 
                onSubmit={onSubmitHandler} 
                className='relative bg-white p-10 rounded-2xl shadow-xl text-slate-600 w-[90%] max-w-sm'
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                {/* Close Icon */}
                <img 
                    onClick={() => setShowLogin(false)} 
                    className='absolute top-4 right-4 cursor-pointer w-5 hover:scale-110 transition' 
                    src={assets.cross_icon} 
                    alt="Close" 
                />

                {/* Title */}
                <h1 className='text-center text-3xl font-semibold text-gray-800'>{state}</h1>
                <p className='text-sm text-gray-500 text-center mt-2'>Welcome back! Please sign in to continue</p>

                {/* Full Name Input (Only for Sign Up) */}
                {state !== 'Login' && (
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-lg mt-5 bg-gray-100 focus-within:bg-white focus-within:border-blue-500 transition'>
                        <img src={assets.user_icon} alt="User" className='w-5' />
                        <input 
                            onChange={e => setName(e.target.value)} 
                            value={name} 
                            className='outline-none bg-transparent flex-1 text-sm' 
                            type="text" 
                            placeholder='Full Name' 
                            required 
                        />
                    </div>
                )}

                {/* Email Input */}
                <div className='border px-4 py-2 flex items-center gap-2 rounded-lg mt-4 bg-gray-100 focus-within:bg-white focus-within:border-blue-500 transition'>
                    <img src={assets.email_icon} alt="Email" className='w-5' />
                    <input 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                        className='outline-none bg-transparent flex-1 text-sm' 
                        type="email" 
                        placeholder='Email Address' 
                        required 
                    />
                </div>

                {/* Password Input */}
                <div className='border px-4 py-2 flex items-center gap-2 rounded-lg mt-4 bg-gray-100 focus-within:bg-white focus-within:border-blue-500 transition'>
                    <img src={assets.lock_icon} alt="Lock" className='w-5' />
                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        className='outline-none bg-transparent flex-1 text-sm' 
                        type="password" 
                        placeholder='Password' 
                        required 
                    />
                </div>

                {/* Forgot Password */}
                <p className='text-sm text-blue-600 my-4 cursor-pointer text-right hover:underline'>
                    Forgot password?
                </p>

                {/* Submit Button */}
                <button className='bg-gradient-to-r from-blue-500 to-purple-500 w-full text-white py-2 rounded-lg text-lg font-medium hover:opacity-90 transition'>
                    {state === 'Login' ? 'Login' : 'Create Account'}
                </button>

                {/* Toggle Login/Signup */}
                <p className='mt-5 text-center text-gray-600'>
                    {state === "Login"
                        ? "Don't have an account? " 
                        : "Already have an account? "}  
                    <span 
                        onClick={() => setState(state === 'Login' ? 'Sign Up' : 'Login')} 
                        className='text-blue-600 cursor-pointer hover:underline'>
                        {state === "Login" ? 'Sign up' : 'Login'}
                    </span>
                </p>
            </motion.form>
        </div>

    )
}

export default Login