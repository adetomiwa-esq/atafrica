import React from 'react'
import Intro from './Intro'
import AutoInvesting from './AutoInvesting'
import ChooseRisk from './ChooseRisk'
import Portfolio from './Portfolio'
import FAQs from './FAQs'

function Index() {
  return (
    <main>
        <Intro />
        <AutoInvesting />
        <ChooseRisk />
        <Portfolio />
        <FAQs />
    </main>
  )
}

export default Index