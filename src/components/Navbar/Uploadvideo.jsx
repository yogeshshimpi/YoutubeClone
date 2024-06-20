import { useRef, useState } from "react";
import "./uploadvideo.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { TextField ,IconButton} from "@mui/material";



const Uploadvideo = ({ setuploadvideo, uploadvideo }) => {
  const [titlecolor,settitlecolor] = useState(false)
  const [descriptionlength,setdescriptionlength] = useState(0)
  const [descriptioncolor,setdescriptioncolor] = useState(false)
  const [titlelength,settitlelength] = useState(0)
  const [tab, settab] = useState(true);
  const fileInput = useRef(null);
  const [files, setfiles] = useState([]);
  const [isActive, TabisActive] = useState("Tab1");
  const handleFileChage = (event) => {
    const selectfile = event.target.files[0];
    // setfiles(selectfile)
    console.log(selectfile);
    setfiles({
      filename: selectfile.name,
      filesize: selectfile.file,
      filetime: selectfile.lastModifiedDate,
    });
    console.log(files[0]);
    settab(true);
  };
  const handlebutton = () => {
    fileInput.current.click();
  };

  const handleTabClick = (tab) => {
    TabisActive(tab);
  };
const disptitlecolor=()=>{
  settitlecolor(true)
}
const hidetitlecolor=()=>{
  settitlecolor(false)
}
const dispdescriptioncolor=()=>{
  setdescriptioncolor(true)
}
const hidedescriptioncolor=()=>{
  setdescriptioncolor(false)
}
  return (
    <>
      <section className="upload">
        <section className="uploadvideo">
          <div className="heading">
            <h1 style={{fontSize:'large'}}>Upload videos</h1>
            <div className="close-send">
              <img src="src\assets\Send feedback.svg" alt="" />
              <button
                onClick={() => setuploadvideo(!uploadvideo)}
                style={{ backgroundColor: "transparent" }}>
                <img src="src\assets\cleartext.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="hero" style={{ display: tab ? "none" : "" }}>
            <img className="uploadimg" src="src\assets\uploadpng.png" alt="" />
            <span className="text1">Drag and drop video files to upload</span>
            <span className="text2">
              Your videos will be private until you publish them.
            </span>
            <input
              type="file"
              ref={fileInput}
              style={{ display: "none" }}
              onChange={handleFileChage}
            />
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
              SELECT FILES
            </Button>
            <p>
              By submitting your videos to YouTube, you acknowledge that you
              agree to YouTube s<span>Terms of Service</span> and{" "}
              <span>Community Guidelines</span>. Please make sure that you do
              not violate others copyright or privacy rights.{" "}
              <span>Learn more</span>
            </p>
          </div>
          <div style={{ display: tab ? "" : "none" }} className="videodetail">
            <Stack
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
              direction="row">
              <Button
                onClick={() => handleTabClick("Tab1")}
                style={{ width: "130px", color: "white" }}
                sx={{ "&:hover": { backgroundColor: "#3ea5ff47" } }}
                variant="text">
                Details
              </Button>
              <Button
                onClick={() => handleTabClick("Tab2")}
                style={{ width: "130px", color: "white" }}
                sx={{ "&:hover": { backgroundColor: "#3ea5ff47" } }}
                variant="text">
                Video elements
              </Button>
              <Button
                onClick={() => handleTabClick("Tab3")}
                style={{ width: "130px", color: "white" }}
                sx={{ "&:hover": { backgroundColor: "#3ea5ff47" } }}
                variant="text">
                Checks
              </Button>
              <Button
                onClick={() => handleTabClick("Tab4")}
                style={{ width: "130px", color: "white" }}
                sx={{ "&:hover": { backgroundColor: "#3ea5ff47" } }}
                variant="text">
                Visibility
              </Button>
            </Stack>
            <div className="tabcontent">
              {isActive === "Tab1" && (
                <div className="left-side">
                  <div className="details">
                    Details <span>REUSE DETAILS</span>
                  </div>
                    <div className="form-title" style={{borderColor: titlecolor ? '#3EA6FF' : '#6A6A6A'}}>
                      <div className="label-text">
                        <span className="label" style={{color: titlecolor ? '#3EA6FF' : '#6A6A6A'}}>Title (required)</span>
                      </div>
                      <TextField
                    id="outlined-multiline-flexible"
                    variant="standard"
                    multiline
                    onChange={(e)=>{settitlelength(e.target.value.length)}}
                    placeholder="Add a title that describes your (type @ to mention a channel)"
                    InputProps={{
                      style: { color: "white",fontSize:'14px',}
                    }}
                    inputProps={{maxlength:100}}
                    
                    sx={{
                      background: "transparent",
                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                    }}
                    onFocus={disptitlecolor}
                    onBlur={hidetitlecolor}
                  />
                  <span className="title-limit">{titlecolor ?`${titlelength}/100`:''}</span>
                    </div>

                    <div className="form-description"  style={{borderColor: descriptioncolor ? '#3EA6FF' : '#6A6A6A'}}>
                    <div className="label-text">
                        <span className="label" style={{color: descriptioncolor ? '#3EA6FF' : '#6A6A6A'}}>description</span>
                      </div>
                      <TextField
                    id="outlined-multiline-flexible"
                    variant="standard"
                    multiline
                    onChange={(e)=>{setdescriptionlength(e.target.value.length)}}
                    InputProps={{
                      style: { color: "white",fontSize:'14px',}
                    }}
                    inputProps={{maxlength:5000}}
                    
                    sx={{
                      background: "transparent",
                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:after": {
                        borderBottom: "none",
                      },
                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                    }}
                    minRows={4}
                    onFocus={dispdescriptioncolor}
                    onBlur={hidedescriptioncolor}
                  />
                  <span className="title-limit">{descriptioncolor ?`${descriptionlength}/5000`:''}</span>
                    </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Uploadvideo;
