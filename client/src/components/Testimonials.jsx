import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            className="relative flex flex-col items-center justify-center my-20 py-12"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#181a33] via-transparent to-[#9b5de5] opacity-50 blur-[120px]" />

            {/* Flickering Title Effect */}
            <motion.h1
                className="text-4xl sm:text-5xl font-extrabold mb-2 text-white tracking-wider 
                           bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 text-transparent bg-clip-text 
                           drop-shadow-lg animate-pulse"
            >
                🍪 Fortune Cookie 🍪
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg text-gray-300 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                "Crack open a piece of Anime wisdom!"
            </motion.p>

            {/* Testimonials Cards */}
            <div className="flex flex-wrap gap-6">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white/10 p-8 rounded-2xl shadow-lg border border-gray-700 w-80 
                                   backdrop-blur-md m-auto cursor-pointer transition-all duration-500 
                                   hover:scale-105 hover:shadow-yellow-400/40 hover:bg-white/20"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Glowing Hover Border Effect */}
                        <div className="absolute inset-0 w-full h-full rounded-2xl border-2 border-transparent 
                                        transition-all duration-500 hover:border-yellow-400" />

                        {/* Testimonial Content */}
                        <div className="flex flex-col items-center">
                            <img src={testimonial.image} alt='' className="rounded-full w-16 border-2 border-yellow-300 shadow-lg" />
                            <h2 className="text-xl font-semibold mt-3 text-white">{testimonial.name}</h2>
                            <p className="text-center text-sm text-gray-300 mt-2">{testimonial.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
