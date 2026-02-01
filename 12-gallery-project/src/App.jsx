import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './components/Card.jsx'
const App = () => {
  const [index, setindex] = useState(1)

  const [userData, setuserData] = useState([])
  const getData=async ()=>{
    const response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
    console.log(response.data)
    setuserData(response.data)
  }

  useEffect(function(){
    getData();
  },[index])

  
  let printUserData= <h3 className='text-gray text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData=userData.map(function(ele,idx){
      // return <h5>{idx+1}  Hello {ele.author}</h5>
      return <div key={idx}>
       <Card ele={ele}/>
      </div>
    })
  }
  return (
    <div className='overflow-auto bg-black h-screen text-white p-4'>
      {/* <button 
      onClick={getData}
      className='bg-green-400 m-10 rounded p-2 active:scale-95'>get data</button> */}
      <h1 className='fixed text-2xl'>{index}</h1>
      <div className='flex flex-wrap gap-2 '>
        {printUserData}
      </div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button onClick={function(){
          console.log('prev button clicked')
          if(index>1){
            setindex(index-1)
            setuserData([])//fast loading
          }
        }}
        style={{opacity:index==1?0.5:1}}
        className='bg-amber-600  text-black cursor-pointer active:scale-95 rounded px-2 py-2 font-bold '>Prev</button>
        <h4>Page {index}</h4>
        <button onClick={function(){
          console.log('next button clicked')
          setindex(index+1)
          setuserData([])//fast loading
        }}
        className='bg-amber-600 text-black  cursor-pointer active:scale-95 rounded px-2 py-2 font-bold '>Next</button>
      </div>
    </div>

  )

}

export default App

//so when we click next new data is loading
//yt uses infinite scrolling
//it loads based on scrool.
// when scrool reaches end it reloads
