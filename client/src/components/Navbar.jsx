import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { setShowLogin, user, credit, logout } = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <div className='flex items-center justify-between py-4'>

            <Link to='/'><img className='w-60 sm:w-64 lg:w-72' src={assets.alogo2} alt="" /></Link>

            <div>
                {
                    user
                        ? <div className='flex items-center gap-2 sm:gap-3'>
                            <button 
                                onClick={() => navigate('/buy')} 
                                className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full 
                                        hover:scale-105 hover:shadow-md transition-transform duration-300 ease-in-out'
                            >
                                <img className='w-5 sm:w-6' src={assets.coinicon} alt="Coin" />
                                <p className='text-sm sm:text-base font-semibold text-gray-700'>
                                    Credits Left: {credit}
                                </p>
                            </button>

                            <p className='text-white/80 max-sm:hidden pl-4'>Hey, {user.name}</p>
                            <div className='relative group'>
                                <img className="w-12 drop-shadow-lg cursor-pointer" src={assets.otaku} alt="Profile" />
                                <div className="absolute hidden group-hover:block top-10 right-0 z-10 bg-white rounded-lg shadow-lg border p-2 transition-all duration-300 ease-in-out">
                                    <ul className="list-none m-0 p-2 text-sm text-gray-800">
                                        <li onClick={logout} className="py-2 px-4 cursor-pointer hover:bg-gray-100 rounded-md transition-all duration-200">Logout</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        : <div className='flex items-center gap-2 sm:gap-5'>
                            <p onClick={() => navigate('/buy')} className='cursor-pointer text-pink-300 hover:text-white'>Pricing</p>
                            <button onClick={() => setShowLogin(true)} className='bg-indigo-900 hover:bg-purple-600 text-pink-200 px-7 py-2 sm:px-10 sm:py-2 text-sm rounded-full transition duration-300'>
                                Login
                            </button>
                        </div>
                }
            </div>
        </div>
    )
}

export default Navbar