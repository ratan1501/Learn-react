import React from 'react'
import { Card } from './components/Card'
import { button } from './components/button'
import { Count } from './components/Count'
import { Marks } from './components/Marks'
import './index.css'
import Form from './components/Form'


function App() {
  return (
    <div>
      {/* <Card/> */}
      {/* {Count()} */}
      {/* {Marks()} */}
      {Form()}
      {/* {button()} */}
      {/* <Card user='Ratan' age={20} />
      <Card user='Pradeep' age={19} />
      <Card user='Raghav' age={23} /> */}
    </div>
  )
}

export default App