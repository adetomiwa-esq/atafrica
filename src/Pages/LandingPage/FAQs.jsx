import React, { useState } from 'react';
import { Questions } from '../../components/Questions';
import { BsFillCaretRightFill, BsFillCaretDownFill } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai'

// type Answered_Questions = {
//     question: string
//     answer: string
// }

function FAQs() {
    const [answeredQuestions, setAnsweredQuestions] = useState(Questions)

    const [viewAns, setViewAns] = useState(null)
    const [previousId, setPreviousId] = useState()

    function toggleExpansion(id){
        // setAnsweredQuestions(prevValue => prevValue.map((x, index) => {
        //     return index ===id ? {...x, expand: !x.expand} : {...x, expand: false}
        // }))

        if(previousId == id){
            return setViewAns(null)
        }else{
            setPreviousId(id)
        }
        

        if(viewAns == null){
            setViewAns(null)
        }

        setViewAns(id)
    }
    
  return (
    <section className='py-32 px-8 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between bg-gradient-to-b from-slate-300 to-blue-200'>
        <div className='w-fit'>
            <div className='relative mb-8 w-fit'>
                <div className='text-[24px] sm:text-[35px] lg:text-[44px] font-[700]'>
                    <h1>Frequently</h1> 
                    <h1>Asked Questions</h1>
                </div>
            </div>
            <p>Got a question that's not yet answered?</p>
            <p className='text-[#1DB954]'>Reach out to our support team</p>
        </div>

        <div className='md:w-[55%] xl:w-6/12'>
            {
                answeredQuestions.map((question, index) => {
                    return <div className='' key={index}>
                        <div className={`flex items-center justify-between my-3`}>
                            <h1 className='text-[20px]'>{question.question}</h1>
                            <i onClick={() => toggleExpansion(index)} className="cursor-pointer">{viewAns === index ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />}</i>
                        </div>
                        <p className='text-[#2a4466] text-[14px] mb-3'>{viewAns === index ? question.answer : ""}</p>
                        <div className='nav-link-line'></div>
                    </div>
                })
            }
            <p className='text-[#1DB954] mt-4 hidden lg:flex items-center'>SEE MORE FAQ <i className='text-[red] ml-2 font-[900]'><AiOutlineArrowRight /></i></p>
        </div>
    </section>
  )
}

export default FAQs