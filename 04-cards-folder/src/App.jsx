import React from 'react'

import Card from './components/Card';

const App = () => {
  const arr=[
  {
    "loc": "Mumbai, India",
    "sal": "$120/hr",
    "level": "Senior Level",
    "type": "Part Time",
    "role": "Senior UI/UX Designer",
    "days": 5,
    "comp": "Amazon",
    "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s"
  },
  {
    "loc": "Bangalore, India",
    "sal": "$95/hr",
    "level": "Mid Level",
    "type": "Full Time",
    "role": "Product Designer",
    "days": 5,
    "comp": "Flipkart",
    "src": "https://upload.wikimedia.org/wikipedia/commons/1/13/Flipkart_logo.png"
  },
  {
    "loc": "Hyderabad, India",
    "sal": "$110/hr",
    "level": "Senior Level",
    "type": "Contract",
    "role": "UX Researcher",
    "days": 4,
    "comp": "Microsoft",
    "src": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  },
  {
    "loc": "Pune, India",
    "sal": "$70/hr",
    "level": "Junior Level",
    "type": "Internship",
    "role": "UI Designer Intern",
    "days": 5,
    "comp": "Infosys",
    "src": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
  }
]

  return (
    <div className='parent'>
      {arr.map(function(ele){
        return <Card loc={ele.loc} sal={ele.sal} level={ele.level} type={ele.type} role={ele.role} days={ele.days} comp={ele.comp} src={ele.src}/>
      })}

      {/* <Card loc='Mumbai,India' sal='$120/hr' level='Senior Level' type='Part Time' role="Senior UI/UX designer" days={5} comp='Amazon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s"/>
      <Card loc='Chennai,India' sal='$200/hr' level='Junior Level' type='Full time' role="Backend Developer" days={5} comp='Amazon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZe2_cwIfo0yLvg5c9kvfNH7QhekWrjSuSA&s"/> */}
    </div>
  )
}

export default App
