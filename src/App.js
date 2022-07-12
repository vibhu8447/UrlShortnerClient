import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Popup from './components/Popup';
import Swal from 'sweetalert2';
import {useState} from 'react';
function App() {
  const [isurl,setisurl] = useState(false); 
  const [url,seturl] = useState(""); 

  const isValidUrl = urlString=> {
      try { 
        return Boolean(new URL(urlString)); 
      }
      catch(e){ 
        return false; 
      }
  }

  const shortUrl = async () =>{
    const url = document.getElementById("Url").value;
    console.log( url);

    if(url==null || url === ""){
        Swal.fire({
          text:"URL can't be empty ",  
          confirmButtonText:"Submit",

        })
        return;
    }
    if(isValidUrl(url)===false){
      Swal.fire('Invalid Url');
      return ;
    }

  
   
 await fetch( 'https://urlshort--server.herokuapp.com/shortURL',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'URL':url})
    })
    .then((response) => response.json())
    .then((result)=>{
      console.log(result);
      setisurl(true);
      seturl(result.URL);
      setInterval(()=>{
        console.log("time is complted");
        setisurl(false);
      },30000)
    })


  }
  return (
    <>
    <div className="App">
      <div>
        <h1 style={{color:"white" , marginBottom:"10px", fontSize:"50px" }} >Free URL Shortener</h1>
      </div>
      <p style={{color: "#B9B9B9"}} > Free tool to shorten URLs. Create short & memorable links in seconds.</p>
      <div className="head" >

        <input type='text' id='Url' className="urlInput" placeholder="Enter link here"/>
        <button type= 'submit' className='button' onClick={shortUrl}  >Shorten URL </button>
      </div>
      {
        isurl?<Popup url = {url} />:<></>
      }
      
    </div>
  
    <Footer/>
    </>
  );
}

export default App;
