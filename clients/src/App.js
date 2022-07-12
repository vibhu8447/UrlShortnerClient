import React from 'react';
import './App.css';
import Footer from './components/Footer.js.js';
import Swal from 'sweetalert2';
function App() {

  const isValidUrl = urlString=> {
      try { 
        return Boolean(new URL(urlString)); 
      }
      catch(e){ 
        return false; 
      }
  }

  function shortUrl(){
    const url = document.getElementById("Url").value;
     console.log( url);
    console.log(isValidUrl(url));
    if(url==null || url == ""){
        Swal.fire("URL can't be empty ")
        return;
    }
    if(isValidUrl(url)===false){
      Swal.fire('Invalid Url');
      return ;
    }

    
    
  }
  return (
    <>
    <div className="App">
      <div>
        <h1 style={{color:"white" , marginBottom:"10px", fontSize:"50px" }} >Free URL Shortener</h1>
      </div>
      <p style={{color: "#B9B9B9"}} > Free tool to shorten URLs. Create short & memorable links in seconds.
</p>
      <div className="head" >

        <input type='text' id='Url' className="urlInput" placeholder="Enter link here"/>
        <button type= 'submit' className='button' onClick={shortUrl}  >Shorten URL </button>
      </div>
      <div className="footer">

      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
