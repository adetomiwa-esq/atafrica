import React from 'react'
import { Link } from 'react-router-dom';
import Curve from '../../images/curve.svg'

function ChooseRisk() {
  return (
    <section className='pt-24 pb-14 bg-slate-200'>
        <h1 className='text-center font-bold text-3xl mb-10 mx-auto w-[92%] md:text-4xl lg:text-5xl sm:w-10/12 lg:w-7/12'>Choose the right level of risk for your money</h1>
        <div className="flex flex-wrap px-[3%]">
            <div className="w-6/12 mb-8 md:mb-0 md:w-3/12 pr-7">
                <p className='text-[14px]'>CASH ACCOUNT</p>
                <h1 className='text-3xl mb-3'>High-yield savings</h1>
                <p className='mb-3'>Best for your daily expenses and your emergency fund, until you're ready to invest.</p>
                <Link to="/" className='underline'>Learn more</Link>
            </div>

            <div className="w-6/12 mb-8 md:mb-0 md:w-3/12 pr-5">
                <p className='text-[14px]'>AUTOMATED BOND PORTFOLIO</p>
                <h1 className='text-3xl mb-3'>Bond ETFs</h1>
                <p className='mb-3'>Increase your earning potential on extra cash with low volatility. Ideal when saving for purchases in the next 1–3 years.</p>
                <Link to="/" className='underline'>Learn more</Link>
            </div>

            <div className="w-6/12 md:w-3/12 pr-5">
                <p className='text-[14px]'>AUTOMATED INVESTMENT</p>
                <h1 className='text-3xl mb-3'>Index Investing</h1>
                <p className='mb-3'>The time-tested method designed to maximize returns over the long term, while we automatically manage the risk for you.</p>
                <Link to="/" className='underline'>Learn more</Link>
            </div>

            <div className="w-6/12 md:w-3/12">
                <p className='text-[14px]'>STOCK INVESTING ACCOUNT</p>
                <h1 className='text-3xl mb-3'>Individual stocks</h1>
                <p className='mb-3'>At risk of higher volatility, but useful when investing in specific companies you believe in.</p>
                <Link to="/" className='underline'>Learn more</Link>
            </div>

        </div>
        <img src={Curve} alt="curve" className='-mt-5'/>
    </section>
  )
}

export default ChooseRisk