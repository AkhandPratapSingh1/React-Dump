import React from 'react'
import './index.css'
import Marvel from './Marvel';
import DC from './Dc';

const favmovs = "marvel";

// const Favs = () =>(


// )
const App = () => ( <>

{(favmovs ==='marvel' ? <Marvel /> : <DC />)}


</>);

export default App;