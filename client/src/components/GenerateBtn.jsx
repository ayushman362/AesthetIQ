import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateBtn = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
            scrollTo(0, 0)
        } else {
            scrollTo(0, 0)
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='pb-16 text-center relative'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#ff6f91] via-[#ff9671] to-[#ffa41b] opacity-40 blur-[100px]" />

            {/* Animated Title */}
            <motion.h1
                className='text-3xl md:text-4xl lg:text-5xl mt-4 font-bold text-transparent bg-clip-text 
                        bg-gradient-to-r from-[#7F00FF] via-[#E100FF] to-[#FF0080] drop-shadow-md py-6 md:py-16'
                whileHover={{ scale: 1.05 }}
            >
                See the Magic. Try Now ✨
            </motion.h1>


            {/* Animated Button */}
            <motion.button
                onClick={onClickHandler}
                className='relative inline-flex items-center gap-2 px-14 py-4 rounded-full bg-gradient-to-r 
                           from-purple-600 to-pink-500 text-white text-lg font-semibold shadow-lg 
                           hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-10">Generate Images</span>
                <img className='h-7 animate-spin-slow' src={assets.star_group} alt="" />

                {/* Neon Glow Effect */}
                <div className="absolute inset-0 w-full h-full bg-white opacity-10 blur-lg rounded-full"></div>
            </motion.button>
        </motion.div>
    )
}

export default GenerateBtn
