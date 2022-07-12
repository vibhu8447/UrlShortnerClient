import React from 'react'
import './popup.css';
import {IoCopyOutline} from 'react-icons/io5';
function Popup(props) {

    function copyToClipboard(){
        navigator.clipboard.writeText(props.url);
    }
    return (
    <div style={{margin:"0px",marginTop:"40px", width:"100%",display:"flex",alignContent:"center",justifyContent:"center"}}>
        <div style={{borderRadius:"4px",alignItems:"center" ,width:"50%" ,border:"2px solid green",background:"#fff",display:"flex",padding:"0px 0px 0px 10px " }} >
                                                                                                    {/* u   r      b  l */}
            <div style={{width:"90%",overflow:"hidden"}} >
                <p> {props.url}</p>
            </div>
            <div className="icons" style={{width:"50px",height:"50px",display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center"}}>
            
                <IoCopyOutline onClick={copyToClipboard} style={{fontSize:"24px"}} />
            </div>
        </div>
    </div>
  )
}

export default Popup