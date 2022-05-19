import React from 'react'
import './Style.css';
import mypht from "./photo.jpg";
import  myvideo from "./myvideo.mp4";



  
function App() {
  return (
<div className="App">     
<div style={{border:'solid 1px black' , maxWidth:'100vw'}}>

<h1 className="title-red">R A O U N A K</h1>

<img src={mypht} className='photo' alt ='myphoto'/>

<br/>

<img src="rose.jpg" className='image' alt = 'myimage' />

<br/>

</div>

<video className="video" width ="320"  height ="240"  controls >

<source src={myvideo} type="video/mp4" />

</video>
    </div>
  );
}

export default App;

