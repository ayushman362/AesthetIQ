import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32 relative px-6"
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Cyberpunk Background Glow */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#1d1e33] via-transparent to-[#9b5de5] opacity-50 blur-[120px]" />

      {/* Title with Neon Glow */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold mb-3 text-white tracking-wider relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        ✨ How It Works ✨
        <div className="absolute left-1/2 -bottom-2 w-[120px] h-[3px] bg-pink-500 rounded-full blur-sm"></div>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl text-gray-300 italic mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        "Unleash your imagination – let AI craft your dreams!"
      </motion.p>

      {/* Steps Container */}
      <div className="w-full max-w-3xl space-y-6">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-center gap-5 p-6 sm:p-8 
                       bg-black/40 border border-purple-500/50 rounded-xl shadow-lg
                       transition-all duration-500 cursor-pointer 
                       backdrop-blur-lg overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
          >
            {/* Gradient Background Change on Hover */}
            <div className="absolute inset-0 
                            bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 
                            opacity-20 blur-[80px] 
                            transition-all duration-500 group-hover:opacity-50 
                            group-hover:from-pink-500 group-hover:via-blue-500 group-hover:to-cyan-400"></div>

            {/* Floating Glow on Hover */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 
                            w-40 h-20 bg-purple-500/20 blur-3xl opacity-40 
                            transition-all duration-500 group-hover:opacity-80 
                            group-hover:bg-cyan-400/30" />

            {/* Icon with Hover Scale Effect */}
            <motion.img
              width={50}
              className="drop-shadow-lg"
              src={item.icon}
              alt=""
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />

            {/* Step Content */}
            <div className="z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">{item.title}</h2>
              <p className="text-gray-300 text-sm sm:text-base mt-1">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
