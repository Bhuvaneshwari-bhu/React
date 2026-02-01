//***************USE EFFECT ************* */
import React, { useEffect, useState } from 'react'



const App = () => {
  const [num, setnum] = useState(10)
  const [num1, setnum1] = useState(100)

// //MOUNTING
// useEffect(function(){
//   console.log("use effect is running when use state is changing and this is called MOUNTING");
  
// })

// //write with dependency, it will run once only now
// useEffect(function(){
//   console.log("use effect is running used with dependency"); 
// },[])

//Now listen, when we enter buttor num change ,leave num1 change 
//but we want use effect to run only when num change , donot run during num1 change
useEffect(function(){
  console.log("use effect is running used with dependency"); 
},[num])


  return (
    <div>
      <h1>{num} + {num1}</h1>
      <button onMouseEnter={function(){
          setnum(num+1);  
        }}
        onMouseLeave={
          function(){
            setnum1(num1+1); 
          }
        }
      
        >Click me to see Mounting </button>
    </div>
  )
}

export default App


//********************AXIOS(API)************** */
// import React, { useState } from 'react'
// import axios from 'axios'


// // async function getData(){
// //  const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
// //  console.log(response);

// // }

//   // const getData=async ()=>{
//   //   // const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   // console.log(response)//this works

//   //   // const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   // console.log(response.json())//this doesnt  works

//   //   const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //   const data=await response.json();
//   //   console.log(data)
//   // }

//   //axios
//   // const getData=async ()=>{
//   //   // const response=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   //   // console.log(response);
//   //   // console.log(response.data);
//   //   const {data}=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    
//   //   console.log(data);
//   // }

  
// const App = () => {
//   const [data, setData] = useState([])
  
//   const getData=async ()=>{
//    const response=await axios.get('https://picsum.photos/v2/list')
//    console.log(response.data)//is array of objects 
//    setData(response.data)
//   }

//   return (
//     <div>
//       <button onClick={getData}>get data</button>
//       <div>
//         {data.map(function(ele,idx){
//           return <h3>{idx+1}:hello {ele.author}</h3>
//         })}
//       </div>
//     </div>
//   )
// }

// export default App
//********************LOCAL STORAGE****************** */

// import React from 'react'

// const App = () => {
//   localStorage.setItem('user','sarthak')//key value pair ,find it is stored in  local storage in inspet
//   const userName=localStorage.getItem('user')
//   localStorage.removeItem('age')
//   localStorage.clear()

//   const o1={
//     name:'bhu',
//     age:18,
//     city:'Nizamabad'
//   }
//   localStorage.setItem('user',JSON.stringyfy(user))//this will show as [obj]
  
//   const user=JSON.parse(localStorage.getItem('user'))

//   return (
//     <div>
//       App
//     </div>
//   )
// }

// export default App
