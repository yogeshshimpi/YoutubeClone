import  {  useState } from "react";
import "./Navbar.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Navbar = ({setuploadvideo,uploadvideo}) => {
  const [inputvalue,setinputvalue] = useState('')
  const [checkclear,setcheckclear] = useState(false)
  const [searchicon,setsearchicon] = useState(false)
  const searchdisp = ()=>{
    setsearchicon(true)

  }
  const searchhide = ()=>{
    setsearchicon(false)
    bordercolor()
  }
  const cleartext =(value)=>{
    setinputvalue(value)
    if(value!==""){
      setcheckclear(true)
    }
    bordercolor()
  }
  const clearvalue = ()=>{
    setinputvalue('')
    setcheckclear(false)
    bordercolor()
  }
  const bordercolor ={
    border:`2px solid ${checkclear?'#1A58A5' :'#222222'}`
  }
  return (
    <>
      <nav>
        <div className="menu">
          <img className='svg' src="public\assets\menu.svg"  alt="" />
          <img className="youtubelogo" width='100' height='27'  src="public\assets\youtubelivelogo.svg" alt="" />
        </div>
        <div className="inputfield">
          <ButtonGroup style={{height: '40px',borderRadius:'20px',overflow:'hidden'}}  variant="contained" >
            <div className="search" style={bordercolor}>
                {searchicon === true?<span>
                  <img src="public\assets\search.svg" alt="" />
                </span>:""}
                <input type="text" value={inputvalue} onChange={(e)=>cleartext(e.target.value)} onFocus={searchdisp} onBlur={searchhide} />
                {checkclear ? <button className="clear"  onClick={clearvalue}><img  src="public\assets\cleartext.svg" alt="" /></button> : ""}

              </div>
              <Button style={{backgroundColor: '#222222',height:'40px'}} ><img src="public\assets\search.svg" alt="" /></Button>
          </ButtonGroup>
          <button className="mic"><img  src="public\assets\mic.svg" alt="" /></button>
        </div>
        <div className="detail">
          <button  onClick={()=>setuploadvideo(!uploadvideo )} className="mic"><img className="svg" src="public\assets\createvideo.svg" alt="" /></button>
          <img className="svg" src="public\assets\notification.svg"  alt="" />
          <img src="" alt="" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
