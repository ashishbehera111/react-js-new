import React,{useState} from 'react'
import "./index.css"
import { question } from './Datas/FaqQuestions'
function Faq() {
    const [showAns,setShowAns]=useState(question[0].id)
  return (
    <div className='App'>
<div >
    <h1>frequently asked question ?</h1>
    <div className='faqouter'>
        {question.map((faqitems,i)=>{
           return(
            <div className='faqitems'>
        <h2 onClick={()=>setShowAns(faqitems.id)}>{faqitems.question}</h2>
        <p className={showAns==faqitems.id ? 'activeAns':''}>{faqitems.answer} </p>
     </div>
           )
        })}
    
    </div>
</div>
    </div>
  )
}

export default Faq