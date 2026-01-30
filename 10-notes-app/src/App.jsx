import React, { useState } from 'react'
// import tailwindcss from '@tailwindcss/vite'
const App = () => {
  function deleteNote(idx){
    const copyTask=[...task];
    copyTask.splice(idx,1)
    settask(copyTask)
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(title)
    console.log(details)
    const copytask=[...task];
    copytask.push({title,details})
    settask(copytask)
    settitle('')
    setdetails('')
  }
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])//[{title,details},{},{}]
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
        
      }} action="" className='flex lg:w-1/2  p-10 flex-col  gap-4  items-start'>
        <h1>Add Notes</h1>
        

          <input 
          type="text" 
          name="" id="" 
          className='px-5 w-full py-2  border-2 rounded '
          placeholder='Enter Notes heading'
          value={title}
          onChange={(e)=>{
            console.log('typing');
            settitle(e.target.value)
          }}
          />


          <textarea 
          type="text" 
          className='px-5 py-2 h-32 w-full  border-2 rounded '
          placeholder='Enter details'
          value={details}
          onChange={(e)=>{
            setdetails(e.target.value)
          }}
          />
          <button className='bg-white active:bg-gray-500 text-black px-5 py-2 w-full rounded '>Add Note</button>
        
        {/* <img className='bg-black' src="https://icon2.cleanpng.com/lnd/20250111/zw/b41e35784f01dbde9010f727fc505d.webp" alt="" /> */}
      </form>

      <div className='p-10 lg:w-1/2 bg-black  '>
        <h1>Your Notes</h1>
        <br />
        <div className='flex flex-wrap gap-5 h-full overflow-auto lg:border-l-2'>
          {
            task.map(function(ele,idx){
              return   <div key={idx} className='relative h-45 w-35  rounded-2xl bg-center  bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh_bISqEVJhzS0KJ8j5dx9A0kir2yzzENQfQ&s")] text-fuchsia-950'>
                <h3 onClick={()=>{
                  deleteNote(idx)
                }} className='absolute right-2 px-2 py-0 text-xl border-2 text-white rounded-full bg-red-600 cursor-pointer'>x</h3>
                <h3 className='font-bold text-xl  mt-6'>{ele.title}</h3>
                <p>{ele.details}</p>
              </div>
              
            })
          }
        </div>
      </div>
      
    </div>
  )
}

export default App
