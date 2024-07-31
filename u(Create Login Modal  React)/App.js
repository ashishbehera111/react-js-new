import React, { useState } from 'react';
import "./index.css"
function App() {
  const[modalstatus,setModalstatus]=useState(false)
  return (
    <div className="App">
      <button className='en' onClick={()=>setModalstatus(!modalstatus)}>enquiry now</button>
<div className={`modalOverLay ${modalstatus ?'modalShow':""}`}></div>
      <div className={`ModalDiv ${modalstatus ?'showModalDiv':""}`}>
        <h1>enquiry now </h1>
      </div>
    </div>
  );
}

export default App;
