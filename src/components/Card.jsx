import React from 'react'

export const Card = (props) => {
    // console.log(props);
    
  return (
    <div className='bg-white border-2 border-green-500 m-2 rounded px-5 py-3 w-fit'>
        <h1 className='text-2xl font-semibold'>
            {props.user}, {props.age}
        </h1>
    </div>
  )
}
 