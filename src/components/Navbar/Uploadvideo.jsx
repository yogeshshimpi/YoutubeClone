import React from "react";
import "./uploadvideo.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { colors } from "@mui/material";
const Uploadvideo = ({setuploadvideo,uploadvideo}) => {
  return (
    <>
      <section className="upload">
        <section className="uploadvideo">
          <div className="heading">
            <h1>Upload videos</h1>
            <div className="close-send">
              <img src="src\assets\Send feedback.svg" alt="" />
              <button onClick={()=>setuploadvideo(!uploadvideo)} style={{backgroundColor:"transparent"}} ><img src="src\assets\cleartext.svg" alt="" /></button>
            </div>
          </div>
          <div className="hero">
            <img className="uploadimg" src="src\assets\uploadpng.png" alt="" />
            <span className="text1">Drag and drop video files to upload</span>
            <span className="text2">
              Your videos will be private until you publish them.
            </span>
            <Button
              style={{
                backgroundColor: "#3EA6FF",
                margin: "15px",
                fontSize: "16px",
                color: "#282828",
                fontWeight: "600",
                borderRadius: "3px",
              }}
              variant="contained">
              SELECT FILES
            </Button>
            <p>
              By submitting your videos to YouTube, you acknowledge that you
              agree to YouTube's
              <span>Terms of Service</span> and{" "}
              <span>Community Guidelines</span>. Please make sure that you do
              not violate others' copyright or privacy rights.{" "}
              <span>Learn more</span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Uploadvideo;
