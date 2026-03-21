import React, { useState } from 'react'
import './TwoWayBinding.css'

const TwoWayBinding = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title)
    setTitle('')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder='Enter your name' 
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default TwoWayBinding