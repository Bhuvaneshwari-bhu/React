import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
const App = () => {
  const user='Bhuvaneshwari'
  const age=19
  return (
    <div>
       <Navbar/>
      <p>Hello Guys ! I'm Bhuvaneshwari user {user}</p>
      <p>I'm {age} year old</p>
     {Card()}
     <Card/>
     
    </div>
  )
}

export default App
