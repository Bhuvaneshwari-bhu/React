# AXIOS &  Routing in React
Its not inbuilt .
go and search in google  "react router dom"

just like we installed axios for API

import axios from 'axios'
const name= async ()=>{
    const response= await axios.get('link');
    console.log(response.data);
}

13-react-router-dom$npm i react-router-dom

-> Browser Router (mostly used)
   client based routing
   basic 
   ex: sheriyans.com=/
        sheriyans.com/courses=/courses
        shertians.com/about=/about

<BrowserRouter>
   <App />
</BrowserRouter>

    <Link to='/home'>Home<Link>

    >basic setup
    >nested routes
    >dynamic routes
    >usenavigate
    >404 page

-> Hash Router 
    server dont know 
    very less used

->Memory Router
    React native 
    static 

-> Static Router
  next.js 