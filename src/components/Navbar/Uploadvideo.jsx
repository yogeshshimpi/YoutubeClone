import { useRef, useState } from "react";
import "./uploadvideo.css";
import Button from "@mui/material/Button";
const Uploadvideo =  ({setuploadvideo,uploadvideo}) => {
  const fileInput = useRef(null);
  const [files,setfiles] = useState([])
  const handleFileChage =  (event)=>{
      const selectfile = event.target.files[0]
        // setfiles(selectfile)
    console.log(selectfile)
    setfiles({filename: selectfile.name,filesize:selectfile.file,filetime:selectfile.lastModifiedDate})
   console.log(files[0])
  }
  const handlebutton = ()=>{
    fileInput.current.click() 
  }
  return (
    <>
      <section className="upload">
        <section className="uploadvideo">
          <div className="heading">
            <h1>Upload videos</h1>
            <div className="close-send">
              <img src="src\assets\Send feedback.svg" alt="" />
              <button onClick={()=> setuploadvideo(!uploadvideo)} style={{backgroundColor:"transparent"}} ><img src="src\assets\cleartext.svg" alt="" /></button>
            </div>
          </div>
          <div className="hero">
            <img className="uploadimg" src="src\assets\uploadpng.png" alt="" />
            <span className="text1">Drag and drop video files to upload</span>
            <span className="text2">
              Your videos will be private until you publish them.
            </span>
            <input type="file" ref={fileInput} style={{display:'none'}} onChange={handleFileChage} />
            <Button
              style={{
                backgroundColor: "#3EA6FF",
                margin: "15px",
                fontSize: "16px",
                color: "#282828",
                fontWeight: "600",
                borderRadius: "3px",
              }}
              onClick={handlebutton}
              variant="contained">
              SELECT FILESh
            </Button>
            <p>
              By submitting your videos to YouTube, you acknowledge that you
              agree to YouTube s
              <span>Terms of Service</span> and{" "}
              <span>Community Guidelines</span>. Please make sure that you do
              not violate others  copyright or privacy rights.{" "}
              <span>Learn more</span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Uploadvideo;
