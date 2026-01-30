import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked')
  }
  function mouseEntered(){
    console.log('Mouse entered')
  }
  function inputChange(ele){
    console.log('User is typing')
    console.log(ele.target.value)
  }
  return (
    <div onWheel={(ele)=>{
      console.log('scrolling')
      console.log('speed',elem)
      console.log(ele.deltaY)
      if(elem>0) console.log("seeda scrolling");
      else console.log("ulta scrolling");
      
      

    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
      
    </div>
  )
}

export default App
{/* <h1>Hello, Bhuvaneshwari</h1>
      <input 
      placeholder='enter text' 
      onChange={inputChange}
       type="text" 
       name="" 
       id=""
        />
      <button onMouseEnter={mouseEntered} onClick={btnClicked}>Change User</button>
      <button onClick={function(){
        console.log('clicked button . Function executed which is decleared directly in the tag')
      }}>Another</button> */}

      {/* <div className='box' onMouseMove={function(ele){
        console.log(ele.clientX," ",ele.clientY);
        
      }}></div> */}