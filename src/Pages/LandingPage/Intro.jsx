import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import * as AOS from 'aos';
import tradingPic from '../../images/grow.webp'


function Intro() {
  const [displayAlert, setDisplayAlert] = useState(true)

  function removeAlert(){
    setDisplayAlert(false)
  }

  const [initialValue, setInitialValue] = useState(900300)

  function increaseNumber(){

    const myInterval = setInterval(function(){

        setInitialValue(prev => prev + 1)
      // else{
      //   setInitialValue(prev => prev - 1)
      // }

    }, 1)

    setTimeout(function(){
      clearInterval(myInterval)
    }, 5000)
  }

  useEffect(() => {
    AOS.init({duration: 3000})

    increaseNumber()
  }, [])
  return (
    <section className='py-5 px-4 pt-12'>
      <div className={`${displayAlert ? 'block' : 'hidden'} relative bg-white shadow-lg rounded-lg p-6 mb-8 w-10/12 lg:w-8/12 mx-auto`} data-aos="fade-down">New Customer Offer: Earn 5.50% (variable) APY* when you open your first cash account with qualifying deposit. <Link to="" className='underline'>Learn more</Link>
        <i className='absolute top-2 right-2 cursor-pointer' onClick={removeAlert}><AiOutlineClose /></i>
      </div>


      <div className="flex flex-col md:flex-row">
        <div className='w-full pt-12 pb-8 md:pb-0 md:pr-14 md:w-6/12'>
          <div className='text-4xl mb-5'>
              <h1 className='mb-3'>Want to build your wealth?</h1>  
              <h1 className='font-bold'>Invest Today</h1>
          </div>
          <p className='mb-5'>ATAfrica exists to help you make the most of your money.Whether you’re saving it, investing it, or just trying to make the most of it, we’ve got a brilliantly easy way to build wealth. You can invest with an automated, expert-built portfolio or save with a high-interest cash account.</p>
          <button className='cursor-pointer bg-blue-950 text-white rounded-md p-4'>Get Started</button>
        </div>

        <div className='relative w-full md:w-6/12'>
          <div className="absolute left-3 top-3 text-4xl text-red">${
            initialValue.toString().slice(0,3) + "," + initialValue.toString().slice(3)
          }</div>
          <img src={tradingPic} alt="tradingPic" className='w-full' />
        </div>
      </div>
    </section>
  )
}

export default Intro