import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import * as AOS from 'aos'


function Intro() {
  const [displayAlert, setDisplayAlert] = useState(true)

  function removeAlert(){
    setDisplayAlert(false)
  }

  useEffect(() => {
    AOS.init({duration: 3000})
  }, [])
  return (
    <section className='py-5 px-4 pt-12'>
      <div className={`${displayAlert ? 'block' : 'hidden'} relative bg-white shadow-lg rounded-lg p-6 mb-8 w-10/12 lg:w-8/12 mx-auto`} data-aos="fade-down">New Customer Offer: Earn 5.50% (variable) APY* when you open your first cash account with qualifying deposit. <Link to="" className='underline'>Learn more</Link>
        <i className='absolute top-2 right-2 cursor-pointer' onClick={removeAlert}><AiOutlineClose /></i>
      </div>


      <div className="flex">
        <div className='w-5/12'>
          <div className='text-4xl mb-5'>
              <h1 className='mb-3'>Want to build your wealth?</h1>  
              <h1 className='font-bold'>Invest Today</h1>
          </div>
          <p className='mb-5'>ATAAfrica exists to help you make the most of your money.Whether you’re saving it, investing it, or just trying to make the most of it, we’ve got a brilliantly easy way to build wealth. You can invest with an automated, expert-built portfolio or save with a high-interest cash account.</p>
          <button className='cursor-pointer bg-blue-950 text-white rounded-md p-4'>Get Started</button>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Intro