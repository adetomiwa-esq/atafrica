import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Comp from '../../images/comp.webp'

function AutoInvesting() {
  return (
    <section className='bg-white flex flex-col items-center md:flex-row '>
        <div className='px-7 py-8 md:px-14 md:w-7/12'>
            <h1 className='text-4xl font-bold mb-4'>Build wealth with automated investing.</h1>
            <p className='mb-6 leading-[28px]'>We make investing easy. No day trading or navigating market ups and downs. We’re here to help you earn more over the long term and make smart decisions with your money.</p>
            <div className="flex items-center">
                <button className='bg-blue-950 py-3 px-6 text-white rounded-md mr-2'>Start investing</button>
                <Link className='flex items-center text-blue-500'>Learn more about automated investing <i className='ml-1'><AiOutlineArrowRight /></i></Link>
            </div>
        </div>
        <div className='w-full md:w-5/12'>
            <img src={Comp} alt="comp-img" className='w-full h-[600px] brightness-50' />
        </div>
    </section>
  )
}

export default AutoInvesting