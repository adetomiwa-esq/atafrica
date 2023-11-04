import React, { useEffect, useState } from 'react';
import { stocks } from '../../components/mockdata';

function Portfolio() {
    
    const [riskScore, setRiskScore] = useState(0)
    function trackingRiskScore(e){
        setRiskScore(e.target.value)
    }

    const ans = Object.entries(stocks[0]).find(x => x[0] === riskScore)
    console.log(ans)
    const bgColor = ['bg-transparent', 'bg-slate-500', 'bg-blue-200', 'bg-slate-300', 'bg-blue-200', 'bg-blue-600', 'bg-indigo-200', 'bg-indigo-400', 'bg-pink-200', 'bg-rose-200' ]

  return (
    <section className='flex bg-gradient-to-b from-pink-200 to-orange-200 pb-12 flex-col md:flex-row'>
        <div className='w-full bg-blue-950 pl-6 md:pl-12 md:w-7/12'>
            <div className='w-10/12 bg-white -mt-8 py-2 px-4 shadow-lg mx-auto rounded-md sm:w-9/12 md:7/12'>
                <p className='flex justify-between mb-4 items-center'>
                    <span className='text-2xl'>Risk score {riskScore}</span>
                    <span className='text-sm'>Example portfolio</span>
                </p>
                <div>
                    <input
                        className='w-full'
                        type="range"
                        name="riskScore"
                        id=""
                        max={10}
                        min={0}
                        value={riskScore}
                        onChange={trackingRiskScore}
                    />
                </div>
            </div>

            <div className='text-white mt-8 flex flex-wrap'>
                {
                    stocks.map((stock, index) => {
                        const width = Object.entries(stock).find((x) => x[0] == riskScore)
                    
                        return <div
                            className='flex items-center'
                            key={index}
                            style={{width: +width[1] > 0 ? '100%': '34%', marginRight: +width[1] > 0 ? '': '39px'}}
                        >
                            <div style={{width: +width[1] > 0 ? '34%': '90%'}}>
                                <p>{stock.name}</p>
                            </div>

                            <div
                                className={
                                    `${bgColor[index]} py-3`
                                }
                                style={{width: width[1] + '%', border: +width[1] > 0 ? '1px solid white': '', paddingLeft: +width[1] > 0 ? '3px': ''}}
                            >
                                {width[1]}%
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

        <div className='w-full pt-20 md:w-5/12 pl-8 pr-16'>
            <h1 className='text-4xl mb-10 w-10/12'>Smarter investing, to suit your personal needs.</h1>
            <p className='mb-5'>Just answer a few questions, and we’ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>
            <button className='cursor-pointer bg-blue-950 text-white rounded-md p-4 hover:bg-gradient-to-b from-blue-800 to-purple-800'>Get Started</button>
        </div>
    </section>
  )
}

export default Portfolio