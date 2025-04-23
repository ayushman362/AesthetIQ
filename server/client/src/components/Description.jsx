import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center my-24 p-6 md:px-28"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   
        >
            {/* Cyberpunk Glow Effect */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-b from-[#181a33] via-transparent to-[#9b5de5] opacity-50 blur-[150px]" />

            {/* Title with Anime Glow */}
            <motion.h1
                className="text-4xl sm:text-5xl font-extrabold mb-2 text-white tracking-wider 
                           bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 text-transparent bg-clip-text
                           drop-shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
            >
                ✨ Think it. Type it. ✨
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg text-gray-300 italic mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                "Watch AI turn it into pure visual magic!"
            </motion.p>

            {/* Content Box */}
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center relative">

                {/* Floating Image with Hover Glow */}
                <motion.img
                    src={assets.ascene}
                    className="w-80 xl:w-96 rounded-lg shadow-2xl 
                               transition-all duration-500 hover:scale-105 
                               hover:shadow-purple-500/50"
                    whileHover={{ scale: 1.08, rotate: 2 }}
                />

                {/* Text Section */}
                <div className="z-10">
                    <h2 className="text-3xl font-semibold max-w-lg mb-4 text-white 
                                   bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400 text-transparent bg-clip-text">
                        Meet Your New AI Art Buddy – Transform Text into Stunning Images Instantly!
                    </h2>

                    <p className="text-gray-300 mb-4">
                        Got an idea? Our AI will turn it into art—no paintbrush required! Just type, click, and BOOM! Your imagination becomes reality (well, at least in pixels). Try it now before AI starts demanding royalties!
                    </p>

                    <p className="text-gray-300">
                        Type a few words, sit back, and let our AI do the heavy lifting! Need product visuals? Dreaming up wild characters? Imagining things that don’t even exist yet? No problem—our AI’s got you. Just type, click, and watch the magic happen (no wizardry degree required)!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
