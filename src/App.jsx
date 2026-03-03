import React from 'react'
import { Card } from './components/Card'


function App() {
  return (
    <div>
      {/* <Card/> */}
      <Card user='Ratan' age={20} />
      <Card user='Pradeep' age={19} />
      <Card user='Raghav' age={23} />
    </div>
  )
}

export default App