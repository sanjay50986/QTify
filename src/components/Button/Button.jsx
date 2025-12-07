import React from 'react'
import "./Button.css"

const Button = ({onFeedbackClick}) => {
  return (
    <button onClick={onFeedbackClick} className='feedback-btn'>
      Give Feedback
    </button>
  )
}

export default Button