import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

const BuyCredit = () => {

  const { backendUrl, loadCreditsData, user, token, setShowLogin } = useContext(AppContext)

  const navigate = useNavigate()


  const initPay = async (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {

        try {

          const { data } = await axios.post(backendUrl + '/api/user/verify-razor', response, { headers: { token } })
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }

      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const paymentRazorpay = async (planId) => {
    try {

      if (!user) {
        setShowLogin(true)
      }

      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const paymentStripe = async (planId) => {
    try {

      const { data } = await axios.post(backendUrl + '/api/user/pay-stripe', { planId }, { headers: { token } })
      if (data.success) {
        const { session_url } = data
        window.location.replace(session_url)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <motion.div 
      className='min-h-[80vh] text-center pt-14 mb-10'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Title & Button */}
      <button className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-2 rounded-full mb-6 shadow-md hover:scale-105 transition-all duration-300'>
        Our Plans
      </button>

      <h1 className='text-center text-4xl font-bold text-gray-800 mb-6 sm:mb-10'>
        Choose the Best Plan for You
      </h1>

      {/* Plans Section */}
      <div className='flex flex-wrap justify-center gap-8 text-left'>
        {plans.map((item, index) => (
          <motion.div 
            key={index} 
            className='bg-white shadow-lg border border-gray-200 rounded-lg py-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500 relative overflow-hidden'
            whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
          >
            {/* Animated Background Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

            {/* Plan Icon */}
            <img width={50} src={assets.creditc} alt="" className='mb-4 mx-auto' />

            {/* Plan Details */}
            <p className='text-xl font-semibold text-gray-900 mb-2'>{item.id}</p>
            <p className='text-sm text-gray-600'>{item.desc}</p>

            {/* Pricing */}
            <p className='mt-6 text-gray-900 font-medium text-lg'>
              <span className='text-4xl font-bold text-blue-600'>₹{item.price}</span> / {item.credits} credits
            </p>

            {/* Payment Buttons */}
            <div className='flex flex-col mt-6'>
              <button 
                onClick={() => paymentRazorpay(item.id)} 
                className='w-full flex justify-center items-center gap-2 border border-gray-400 mt-2 text-sm font-medium rounded-md py-3 min-w-52 bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-300'
              >
                <img className='h-5' src={assets.razorpay_logo} alt="" /> Pay with Razorpay
              </button>
              <button 
                onClick={() => paymentStripe(item.id)} 
                className='w-full flex justify-center items-center gap-2 border border-gray-400 mt-2 text-sm font-medium rounded-md py-3 min-w-52 bg-gray-100 hover:bg-purple-500 hover:text-white transition-all duration-300'
              >
                <img className='h-5' src={assets.stripe_logo} alt="" /> Pay with Stripe
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>


  )
}

export default BuyCredit