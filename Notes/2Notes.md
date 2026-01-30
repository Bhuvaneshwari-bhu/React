## Components

# Default export
export default Component -> import Compo from 'location'

# Named Export
export fun(){} -> import {fun} from 'location'

Repeated tasks: just create components

<Card/> ==  {Card()} 

to print variable we put curly braces
let user = 'bhu'
return (
    <>
        {user}
    </>
)

we can only pass data(props) from parent to child .App.jsx -> Card.jsx. 