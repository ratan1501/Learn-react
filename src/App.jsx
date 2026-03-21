import React from 'react'
import { Card } from './components/Card'
import { button } from './components/button'
import { Count } from './components/Count'
import { Marks } from './components/Marks'
import './index.css'
import Form from './components/Form'
import Todo from './components/Todo'
import UseState from './components/Topics/UseState'
import FormHandling from './components/Topics/FormHandling'
import TwoWayBinding from './components/Topics/TwoWayBinding'



function App() {
  return (
    <div>
      {/* <Card/> */}
      {/* {Count()} */}
      {/* {Marks()} */}
      {/* {Form()} */}
      {/* {Todo()} */}
      {/* {UseState()} */}
      {/* {FormHandling()} */}
      {TwoWayBinding()}
      {/* {button()} */}
      {/* <Card user='Ratan' age={20} />
      <Card user='Pradeep' age={19} />
      <Card user='Raghav' age={23} /> */}
    </div>
  )
}

export default App