import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='bg-blue-950 text-white px-4 sm:px-7 pt-14 pb-5'>
        <div className='flex flex-wrap mb-10 border-b-2 border-white pb-6'>
            <div className="hidden sm:block sm:w-2/6 lg:w-1/6">
                <p className='text-2xl sm:text-4xl'>ATAAfrica</p>
            </div>
            <ul className="w-3/6 sm:w-2/6 mb-5 lg:mb-0 lg:w-1/6">
                <h2 className="mb-2 font-bold text-xl">Accounts</h2>
                <Link to='/' className="mb-2 block hover:opacity-75"><li>Investing</li></Link>
                <Link to='/' className="mb-2 block hover:opacity-75"><li>Real Estate</li></Link>
                <Link to='/' className="mb-2 block hover:opacity-75"><li>Crypto investing</li></Link>
                <Link to='/' className="mb-2 block hover:opacity-75"><li>Checking</li></Link>
                <Link to='/' className="mb-2 block hover:opacity-75"><li>Trusts</li></Link>
            </ul>

            <ul className="w-3/6 sm:w-2/6 mb-5 lg:mb-0 lg:w-1/6">
                <h2 className="mb-2 font-bold text-xl">Investments</h2>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Portfolio options</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Tax-smart investing</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Charitable giving</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Retirement income</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Socially responsible investing</li></Link>
            </ul>

            <ul className="w-3/6 sm:w-2/6 mb-5 lg:mb-0 lg:w-1/6">
                <h2 className="mb-2 font-bold text-xl">Tools</h2>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Retirement planning</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Track your goals</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>All-in-one dashboard</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Rewards</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Refer-a-friend</li></Link>
            </ul>

            <ul className="w-3/6 sm:w-2/6 mb-5 lg:mb-0 lg:w-1/6">
                <h2 className="mb-2 font-bold text-xl">Help</h2>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Help center</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>FAQ</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Talk to an advisor</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Article library</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Investment philosophy</li></Link>
            </ul>

            <ul className="w-3/6 sm:w-2/6 mb-5 lg:mb-0 lg:w-1/6">
                <h2 className="mb-2 font-bold text-xl">Company</h2>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Pricing</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>About us</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>How ATAafrica works</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Press</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>Careers</li></Link>
                <Link to="" className="mb-2 block hover:opacity-75"><li>ATAAfrica shop</li></Link>
            </ul>

        </div>

        <ol className='list-decimal text-[12px] px-2 my-6'>
            <li className='mb-3'>Nerdwallet receives cash compensation for referring potential clients to ATAAfrica, LLC (“ATAAfrica”) via advertisements placed on their website. Nerdwallet and ATAAfrica are not associated with one another and have no formal relationship outside of this arrangement. Nerdwallet’s opinions are their own. Their ratings are determined by their editorial team. The scoring formula for online brokers and robo-advisors takes into account over 15 factors, including account fees and minimums, investment choices, customer support and mobile app capabilities. Nerdwallet ranking as of June 2021. ATAAfrica provides cash compensation in connection with obtaining this ranking. Bankrate’s endorsements were voluntarily given and neither ATAAfrica or ATAAfrica Brokerage has a formal relationship with Bankrate. Bankrate evaluates firms based on many factors including cost factors, account features, and consumer experience aspects, such as mobile apps and customer support. The evaluation process was conducted by Bankrate’s editorial team. ATAAfrica pays an annual license fee to use Bankrate’s awards in marketing materials.</li>
            <li className='mb-3'>Apple App Store and Google Play Store ratings based on user ratings from February 2014 (Apple) and December 2015 (Google) through Oct 2023. Ratings compiled by Apple, Inc., and Google, Inc., who receive compensation for hosting our app.</li>

            <li className='mb-3'>The national average interest rate for savings accounts as posted on FDIC.gov, as of July 28, 2023.</li>
        </ol>

        <div className='text-[12px]'>
            <p className='mb-4'>By using this website, you understand the information being presented is provided for informational purposes only and agree to our <Link to="/" className='underline'>Terms of Use</Link> and <Link to="/" className='underline'>Privacy Policy</Link>. ATAAfrica relies on information from various sources believed to be reliable, including clients and third parties, but cannot guarantee the accuracy and completeness of that information. Nothing in this communication should be construed as an offer, recommendation, or solicitation to buy or sell any security.Additionally, ATAAfrica or its affiliates do not provide tax advice and investors are encouraged to consult with their personal tax advisors.</p>

            <p className='mb-4'>The effectiveness of the Tax-Loss Harvesting strategy to reduce the tax liability of the client will depend on the client’s entire tax and investment profile, including purchases and dispositions in a client’s (or client’s spouse’s) accounts outside of ATAAfrica and type of investments (e.g., taxable or nontaxable) or holding period (e.g., short- term or long-term).Tax loss harvesting may generate a higher number of trades due to attempts to capture losses. There is a chance that trading attributed to tax loss harvesting may create capital gains and wash sales and could be subject to higher transaction costs and market impacts. In addition, tax loss harvesting strategies may produce losses, which may not be offset by sufficient gains in the account and may be limited to a $3,000 deduction against income. The utilization of losses harvested through the strategy will depend upon the recognition of capital gains in the same or a future tax period, and in addition may be subject to limitations under applicable tax laws, e.g., if there are insufficient realized gains in the tax period, the use of harvested losses may be limited to a $3,000 deduction against income and distributions. Losses harvested through the strategy that are not utilized in the tax period when recognized (e.g., because of insufficient capital gains and/or significant capital loss carryforwards), generally may be carried forward to offset future capital gains, if any.</p>

            <p className='text-center mt-14'>© 2023 ATAAfrica. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer