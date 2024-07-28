import { lazy, useRef, useState ,Suspense} from "react";
import "./uploadvideo.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Details = lazy(()=>import("./details"));


const Uploadvideo = ({ setuploadvideo, uploadvideo }) => {
  const [tab, settab] = useState(true);
  const fileInput = useRef(null);
  const [files, setfiles] = useState([]);
  const [isActive, TabisActive] = useState("Tab1");
  const [scroll,setscroll] = useState(false)

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

  const handlescroll = (event) => {
    const scrollTop = event.target.scrollTop;
    if (scrollTop > 0) {
      setscroll(true)
    }else{
      setscroll(false)
    }
  };
  return (
    <>
      <section className="upload">
        <section className="uploadvideo">
          <div className="heading">
            <h1 style={{ fontSize: "large" }}>Upload videos</h1>
            <div className="close-send">
              <img src="src\assets\Send feedback.svg" alt="" />
              <button
                onClick={() => setuploadvideo(!uploadvideo)}
                style={{ backgroundColor: "transparent" }}>
                <img src="src\assets\cleartext.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="hero" style={{ display: tab ? "" : "none" }} >
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
                boxShadow:scroll?'rgb(2 2 2 / 10%) 0px 2px 6px':''
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
            <div className="tabcontent" onScroll={handlescroll}>
              <Suspense fallback={<div>Loading...</div>} >{isActive === "Tab1" && ( <Details/>)}</Suspense>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Uploadvideo;
