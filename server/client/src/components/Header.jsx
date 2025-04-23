import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

    const { user, setShowLogin } = useContext(AppContext)

    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div
                className='text-white inline-flex items-center gap-3 px-6 py-2 rounded-full border border-purple-400 shadow-lg bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 backdrop-blur-md'
                initial={{ y: -20, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            >
                <img src={assets.star_icon} alt="" className='w-6 h-6 animate-pulse' />
                 <p className='font-semibold text-lg tracking-wide drop-shadow-md'>
                     Turn Thoughts into Stunning Art! 🎨✨
                </p>
            </motion.div>

            <motion.h1
                className="text-center mx-auto mt-10 text-5xl sm:text-8xl max-w-[320px] sm:max-w-[650px] font-extrabold leading-tight tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg"
                initial={{ opacity: 0, y: -30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.3, duration: 1.5, type: 'spring' }}
            >
                Transform Boring Words Into <span className='text-blue-600'>Dreams</span>
            </motion.h1>

            <motion.p
                className="text-center max-w-xl mx-auto mt-5 text-lg sm:text-xl text-gray-200 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                Summon your wildest ideas and let AI paint the picture! 🎨✨ Just type, and watch your imagination come to life in seconds.
            </motion.p>

            <motion.button
                className='sm:text-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 w-auto mt-8 px-14 py-3 flex items-center gap-3 rounded-full font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300'
                whileHover={{ scale: 1.08, boxShadow: "0px 4px 20px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ default: { duration: 0.6 }, opacity: { delay: 0.5, duration: 1 } }}
                onClick={onClickHandler}
            >
                Generate Images <img className='h-6' src={assets.star_group} alt="" />
            </motion.button>

            <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-16 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {Array(8).fill('').map((_, index) => (
                    <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-lg transition-all 
                                duration-300 cursor-pointer group"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                    >
                        {/* Image */}
                        <img
                            className={`w-full object-cover rounded-xl transition-all 
                                        duration-500 ${index % 2 === 0 ? 'h-40 sm:h-52' : 'h-40 sm:h-52'}`}
                            src={index % 2 === 0 ? assets.agirl : assets.aboy}
                        />

                        {/* Glassmorphism Hover Effect */}
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 
                                        transition-all duration-500 backdrop-blur-lg flex items-center 
                                        justify-center rounded-xl">
                            <p className="text-white text-lg font-semibold">✨ Try It ✨</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>


            <motion.p
                className="mt-2 text-lg sm:text-xl font-medium text-gray-300 tracking-wide 
                            bg-black/20 px-4 py-1 rounded-lg shadow-md backdrop-blur-md"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                >
            ✨ Stunning AI Creations by <span className="text-purple-400 font-semibold">AesthetIQ</span> ✨
            </motion.p>
        </motion.div>
    )
}

export default Header


// const Header = () => {
//     return (
//         <div className='text-center'>

//             <div className='text-stone-500 mt-14 inline-flex items-center gap-2 bg-white px-5 py-1 rounded-full border border-neutral-500'>
//                 <p>Best text to image generator</p>
//                 <img src={assets.star_icon} alt="" />
//             </div>


//             <h1 className='text-center mx-auto mt-10 text-4xl max-w-[300px] sm:text-6xl sm:max-w-[490px]'>
//                 Turn text to <span className='text-blue-600'>image</span>, in seconds.
//             </h1>

//             <p className='text-center max-w-xl mx-auto mt-5'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

//             <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2 rounded-full hover:scale-[1.01] transition-all'>
//                 Generate Images
//             </button>

//             <div className='flex flex-wrap justify-center mt-16 gap-3'>
//                 {Array(6).fill('').map((item, index) => (
//                     <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer' width={70} key={index} src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} />
//                 ))}
//             </div>
//             <p className='mt-2 text-neutral-600'>Generated images from imagify</p>
//         </div>
//     )
// }

// export default Header