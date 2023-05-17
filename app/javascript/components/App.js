import React from "react";
import {Route,Routes} from 'react-router-dom';
import Greeting from './Greeting';

function App(){
    return(
        <Routes>
            <Route path="/" element={<Greeting/>}/>
        </Routes>
    );
}
export default App;