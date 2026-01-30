import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
   const users=[
        {
            src:'https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW58ZW58MHx8MHx8fDA%3D',
            intro:'Colors reflect our attitude,personality and taste',
            tag:'Satisfied',
            color:'green'
        },
        {
            src:'https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tZW58ZW58MHx8MHx8fDA%3D',
            intro:'Enjoy the work you do.Find the purpose in doing anything',
            tag:'Working',
            color:'red',
        },
         {
            src:'https://plus.unsplash.com/premium_photo-1681483433432-6ecefcb15daf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            intro:'Happiness is trying new things and exploring the world',
            tag:'Happy',
            color:'skyblue'
        },
        
        {
            src:'https://images.unsplash.com/photo-1761839256840-7780a45b85dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MzZ8fHdvbWVufGVufDB8fDB8fHww',
            intro:'Fashion is also an art.do it with passion',
            tag:'Style',
            color:'black'
        },
        {
            src:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHdvbWVufGVufDB8fDB8fHww',
            intro:'Think big,aim big,do big.Be the one you want to be ',
            tag:'Startup',
            color:'pink'
        }
       
    ]
  return (
    <div >
    <Section1 users={users}/>
    <Section2/>
    </div>
  )
}

export default App
