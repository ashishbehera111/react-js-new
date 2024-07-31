import React, { useState } from 'react';
import "./index.css"
function App() {
  const[menuStatus,setMenustatus]=useState(false)
  return (
    <div className="App">
      <button className='micon'onClick={()=>setMenustatus(!menuStatus)}>
        {menuStatus ?
         <span>&times;</span>
         :
         <span>&#9776;</span>
      }
        
        
        
        </button>
    <div className={`menu ${menuStatus ? 'activeMenu' : ''}`}>

      <ul>
        <li>home</li>
        <li>about</li>
        <li>course</li>
        <li>gallery</li>
        <li>Contact Us</li>
      </ul>
    </div>
    </div>
  );
}

export default App;
