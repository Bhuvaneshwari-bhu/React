import React, { useState } from 'react'
//two way binding
const App = () => {
  const submitHandle=()=>{
    console.log("form submitted and page reloads thats default behaviour")
    settitle('');
  }
  const [title, settitle] = useState('love you ')
  return (
    <div>
      <form action="" onSubmit={(e)=>{
        e.preventDefault()//handle default behaviour
        submitHandle()
      }}>
        <input
         type="text"
         name="" 
         id="" 
         onChange={(e)=>{
          console.log(e.target.value)
          settitle(e.target.value)
         }}
         value={title}
         placeholder='enter your name' />
        <button type="submit">submit</button>
        <h1>Know Whats happening</h1>
        <p>create a usestate title <br /> value is that tile <br />when onchange settitle <br />title is value</p>
      </form>
    </div>
  )
}

export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [num,setnum] = useState({user:'bhu',age:20})
//   function btnclicked1() {
//     //setnum({user:'changebhu',age:'40'})//runs asynchronously
//     const newNum={...num}//[...num] iterable,   copy paste in newNum ,points to same reference 
//     newNum.user='Aman'
//     setnum(newNum)
//     //another method : easy
//     setnum(prev=>({...num,age:60}))
//   }
//   const [arr, setarr] = useState([10,20,30])
//   function  btnclicked2(){
//     const newArr=[...arr]//copy that points same array
//     newArr.push(99)
//     newArr[0]=11
//     setarr(newArr)
//   }
//   const [batch, setbatch] = useState(10)
//   function btnclicked3(){
//     // setbatch(batch+1)
//     // setbatch(batch+1)
//     // setbatch(batch+1)
//     //above increments only once

//     setbatch(prev=>(prev+1))
//     setbatch(prev=>(prev+1))
//     setbatch(prev=>(prev+1))
//   }
//   return (
//     <div>
//       App 
//       <h1>{num.user}   {num.age}</h1>
//       <button onClick={btnclicked1}>setnum</button>
//       <h1>{arr}</h1>
//       <button onClick={btnclicked2}>setarr</button>
//       <h1>{batch}</h1>
//       <button onClick={btnclicked3}>batch</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [num, setnum] = useState(0)
//   function inc(){
//     setnum(num+1)
//   }
//   function dec(){
//     setnum(num-1)
//   }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={inc}>increase</button>
//       <button onClick={dec}>decrease</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   //let a=20;
//   const [a, setA] = useState(20)
//   const [user, setuser] = useState('bhu')
//   const [arr, setarr] = useState([10,20,30])

//   function changeA(){
//    // a=30; not possible
//    setA(30)
//    if(user=='bhu')setuser('Bhuvaneshwari')
//       else setuser('bhu')
//   setarr([60,70,90])
//   }

  
//   function changeUser(){
//     if(user=='bhu')setuser('Bhuvaneshwari')
//       else setuser('bhu')
//   }
//   return (
//     <div>
//       <h1>A value is {a} <br /> value of user is {user} <br /> {arr}</h1>
//       <button onClick={changeA}>Click to change a</button>
//     </div>
//   )
// }

// export default App
