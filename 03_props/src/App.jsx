import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Bhuvaneshwari' age={19} img='https://images.unsplash.com/photo-1768326205125-e7a30f054696?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D'/>
     <Card user='Sai Krishna' age={17} img='https://plus.unsplash.com/premium_photo-1768396819768-0805d38cb1fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
