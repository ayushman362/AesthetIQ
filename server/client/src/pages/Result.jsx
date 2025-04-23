import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Result = () => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [image, setImage] = useState(assets.akid)

  const { generateImage } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (input) {
      const image = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }

  return (
    <motion.form 
      onSubmit={onSubmitHandler} 
      className="flex flex-col min-h-[90vh] justify-center items-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <motion.img 
            className="max-w-sm rounded-lg shadow-xl shadow-purple-500/50 transition-all duration-500" 
            src={image} 
            alt="" 
            animate={{ opacity: isImageLoaded ? 1 : 1, scale: isImageLoaded ? 1 : 0.95 }}
          />
          <span 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all ${loading ? 'w-full duration-[5s] animate-pulse' : 'w-0'}`}
          />
        </div>
        {loading && <p className="text-purple-400 text-sm mt-2 animate-pulse">Generating your masterpiece...</p>}
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-gray-800 text-white text-sm p-1 mt-10 rounded-full shadow-md">
          <input 
            onChange={(e) => setInput(e.target.value)} 
            value={input} 
            className="flex-1 bg-transparent outline-none px-6 text-white placeholder-gray-400"
            type="text" 
            placeholder="Describe your dream artwork..."
          />
          <button 
            type="submit" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex gap-3 flex-wrap justify-center text-white text-sm p-1 mt-10 rounded-full">
          <motion.p 
            onClick={() => setIsImageLoaded(false)} 
            className="border border-purple-500 text-purple-400 px-8 py-3 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Generate Another
          </motion.p>
          <a 
            href={image} 
            download 
            className="bg-gradient-to-r from-pink-500 to-red-500 px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  )
}

export default Result
