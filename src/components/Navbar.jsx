import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
    const [displayMobileNav, setDisplayMobileNav] = useState(false)

    function showMobileNav(){
        setDisplayMobileNav(true)
    }

    function removeMobileNav(){
        setDisplayMobileNav(false)
    }
  return (
    <header className='flex justify-between px-[4%] items-center h-24 border-t border-b border-blue-900 bg-slate-100'>
        <div className='text-4xl font-bold'>
            <Link to="/">ATAAfrica</Link>
        </div>

        <ul className={`flex flex-col fixed ${displayMobileNav ? 'top-0 h-[100svh] overflow-x-scroll hidescrollbar' : 'top-[-1000px]'} transition-all ease-in-out duration-300 bg-blue-950 items-center text-white w-full left-0 px-5 pt-5 pb-16 z-50 xl:h-fit xl:bg-transparent xl:text-blue-950 xl:p-0 xl:static xl:flex-row xl:w-[600px] xl:justify-between`}>
            <li className='flex justify-between text-xl w-full mb-8 xl:hidden'>
                <p>ATAAfrica</p>
                <p className='cursor-pointer' onClick={removeMobileNav}><AiOutlineClose /></p>
            </li>
            <li className='relative group mb-6 xl:mb-0' onClick={removeMobileNav}>
                <Link to='/'>
                    Cash
                    <div className='bg-white h-[2.5px] rounded-sm absolute xl:bg-blue-900 -bottom-1 w-0 group-hover:w-full transition-all delay-300 duration-300 ease-in-out'></div>
                </Link>
            </li>

            <li className='relative group mb-6 xl:mb-0' onClick={removeMobileNav}>
                <Link to='/'>
                    Bonds
                    <div className='bg-white h-[2.5px] rounded-sm absolute xl:bg-blue-900 -bottom-1 w-0 group-hover:w-full transition-all delay-300 duration-300 ease-in-out'></div>
                </Link>
            </li>

            <li className='relative group mb-6 xl:mb-0' onClick={removeMobileNav}>
                <Link to='/'>
                    Automated Investing
                    <div className='bg-white h-[2.5px] rounded-sm absolute xl:bg-blue-900 -bottom-1 w-0 group-hover:w-full transition-all delay-300 duration-300 ease-in-out'></div>
                </Link>
            </li>

            <li className='relative group mb-6 xl:mb-0' onClick={removeMobileNav}>
                <Link to='/'>
                    Planning
                    <div className='bg-white h-[2.5px] rounded-sm absolute xl:bg-blue-900 -bottom-1 w-0 group-hover:w-full transition-all delay-300 duration-300 ease-in-out'></div>
                </Link>
            </li>

            <li className='relative group mb-6 xl:mb-0' onClick={removeMobileNav}>
                <Link to='/'>
                    Learn
                    <div className='bg-white h-[2.5px] rounded-sm absolute xl:bg-blue-900 -bottom-1 w-0 group-hover:w-full transition-all delay-300 duration-300 ease-in-out'></div>
                </Link>
            </li>

            {/* <li></li>
            <li></li> */}
            <div className="flex w-full flex-col xl:hidden">
                <button className='w-full p-4 bg-transparent border mb-6 border-white hover:bg-white hover:text-blue-950 transition-all ease-out duration-300 rounded-lg' onClick={removeMobileNav}>Log in</button>
                <button className='text-blue-950 bg-white p-4 hover:opacity-75 hover:bg-gradient-to-b from-blue-700 to-purple-600 hover:text-blue-950 transition-all ease-out duration-300 rounded-lg' onClick={removeMobileNav}>Get Started</button>
            </div>
        </ul>

        <div className="hidden xl:flex">
            <button className='mr-2'>Log in</button>
            <button className='text-white bg-blue-800 py-3 px-5 hover:opacity-75'>Get Started</button>
        </div>

        <div className='text-blue-950 text-xl cursor-pointer xl:hidden' onClick={showMobileNav}>
            <FaBars />
        </div>
    </header>
  )
}

export default Navbar