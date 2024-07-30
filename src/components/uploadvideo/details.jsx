import { useState } from "react";
import "./details.css";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Box from '@mui/material/Box';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

const Details = () => {
  const [titlecolor, settitlecolor] = useState(false);
  const [descriptionlength, setdescriptionlength] = useState(0);
  const [descriptioncolor, setdescriptioncolor] = useState(false);
  const [titlelength, settitlelength] = useState(0);
  const [age_registration, setage_registration] = useState(false);
  const [extra_detail, setextra_detail] = useState(true);
  const [input, setinput] = useState("");
  const [tags, settag] = useState([]);
  const [tag_color, settag_color] = useState(false);

  const disptitlecolor = () => {
    settitlecolor(true);
  };
  const hidetitlecolor = () => {
    settitlecolor(false);
  };
  const dispdescriptioncolor = () => {
    setdescriptioncolor(true);
  };
  const hidedescriptioncolor = () => {
    setdescriptioncolor(false);
  };
  const handleregistration = (value) => {
    setage_registration(value);
  };
  const handle_extra_detail = (value) => {
    setextra_detail(value);
  };
  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      console.log(tags);
      settag([...tags, input.trim()]);
      setinput("");
    }
    if (e.key === "Backspace") {
      if (input.length <= 0) {
        removetag(tags.length - 1);
      }
    }
  };
  const removetag = (index) => {
    settag(tags.filter((item, i) => i !== index));
  };
  const handletagcolor = () => {
    settag_color(!tag_color);
  };
  return (
    <>
      <div className="left-side">
        <div className="details">
          Details <span>REUSE DETAILS</span>
        </div>
        <div
          className="form-title"
          style={{ borderColor: titlecolor ? "#3EA6FF" : "#6A6A6A" }}>
          <div className="label-text">
            <span
              className="label"
              style={{ color: titlecolor ? "#3EA6FF" : "#6A6A6A" }}>
              Title (required)
            </span>
          </div>
          <TextField
            id="outlined-multiline-flexible"
            variant="standard"
            multiline
            onChange={(e) => {
              settitlelength(e.target.value.length);
            }}
            placeholder="Add a title that describes your (type @ to mention a channel)"
            InputProps={{
              style: { color: "white", fontSize: "14px" },
            }}
            inputProps={{ maxLength: 100 }}
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
          <span className="title-limit">
            {titlecolor ? `${titlelength}/100` : ""}
          </span>
        </div>

        <div
          className="form-description"
          style={{
            borderColor: descriptioncolor ? "#3EA6FF" : "#6A6A6A",
          }}>
          <div className="label-text">
            <span
              className="label"
              style={{
                color: descriptioncolor ? "#3EA6FF" : "#6A6A6A",
              }}>
              Description
            </span>
          </div>
          <TextField
            id="outlined-multiline-flexible"
            variant="standard"
            placeholder="Tell viewers about your video (type @ to mentioin a channel)"
            multiline
            onChange={(e) => {
              setdescriptionlength(e.target.value.length);
            }}
            InputProps={{
              style: { color: "white", fontSize: "14px" },
            }}
            inputProps={{ maxLength: 5000 }}
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
          <span className="title-limit">
            {descriptioncolor ? `${descriptionlength}/5000` : ""}
          </span>
        </div>
        <div className="form-thumbnail">
          <span className="label">Thumbnail</span>
          <span className="description">
            Set a thumbnail that stands out and draws viewers&apos; attention.{" "}
            <span className="Mark">Learn more</span>
          </span>
          <div className="thumbnail-image">
            <div className="upload-file">
              <IconButton color="primary">
                <AddPhotoAlternateOutlinedIcon />
              </IconButton>
              Upload file
            </div>
            <div
              className="upload-file"
              style={{ backgroundColor: "#00000059" }}>
              <IconButton>
                <AutoAwesomeOutlinedIcon />
              </IconButton>
              Auto-generated
            </div>
            <div className="upload-file">
              <IconButton>
                <InsertChartOutlinedIcon />
              </IconButton>
              Test and Compare
            </div>
          </div>
          <div className="form-playlist">
            <div className="label">Playlists</div>
            <div className="description">
              Add your video to one or more playlists to organise your content
              for viewers. <span className="Mark">Learn more</span>
            </div>
            <button className="playlist-btn">
              Select
              <IconButton>
                <KeyboardArrowDownOutlinedIcon />
              </IconButton>
            </button>
          </div>
          <div className="form-audience">
            <span className="label">Audience</span>
            <span className="sub-heading">
              Is this video &apos;Made for Kids&apos;? (required)
            </span>
            <div className="description">
              Regardless of your location, you&apos;re legally required to
              comply with the Children&apos;s Online Privacy Protection Act
              (COPPA) and/or other laws. You&apos;re required to tell us whether
              your videos are &apos;Made for Kids&apos;.
              <span className="Mark">
                What is &apos;Made for Kids&apos; content?
              </span>
            </div>
            <div className="features">
              <IconButton>
                <ErrorOutlineOutlinedIcon />
              </IconButton>
              <div
                className="features-text "
                style={{ fontSize: "12px", color: "#6A6A6A" }}>
                Features like personalised ads and notifications won&apos;t be
                available on videos &apos;Made for Kids&apos;. Videos that are
                set as &apos;Made for Kids&apos; by you are more likely to be
                recommended alongside other children&apos;s videos.{" "}
                <span style={{ color: "#3EA6FF" }}>Learn more</span>
              </div>
            </div>
            <RadioGroup name="Kids">
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Yes, it's 'Made for Kids'"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="No, it's not 'Made for Kids'"
              />
            </RadioGroup>
            <div className="form-age-registration">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1px",
                }}
                onClick={() => {
                  handleregistration(!age_registration);
                }}>
                <span
                  style={{ border: "none", fontSize: "20px" }}
                  className="material-symbols-outlined">
                  {age_registration
                    ? "keyboard_arrow_up"
                    : "keyboard_arrow_down"}
                </span>
                Age restriction (advanced)
              </button>
              <div
                className="age-registration"
                style={{
                  marginTop: "10px",
                  display: age_registration ? "flex" : "none",
                  flexDirection: "column",
                  gap: "8px",
                }}>
                <div className="label" style={{ fontSize: "13px" }}>
                  Do you want to restrict your video to an adult audience?
                </div>
                <div className="description">
                  Age-restricted videos are not shown in certain areas of
                  YouTube. These videos may have limited or no ads monetisation.{" "}
                  <span className="Mark">Learn more</span>
                </div>
                <RadioGroup name="age-registration">
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Yes, restrict my video to viewers over 18"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="No, don't restrict my video to viewers over 18 only"
                  />
                </RadioGroup>
              </div>
            </div>
            <div className="extra-detail">
              <Button
                variant="text"
                style={{
                  backgroundColor: "#A39F9F",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  padding: "6px 13px",
                  borderRadius: "30px",
                }}
                onClick={() => {
                  handle_extra_detail(!extra_detail);
                }}>
                SHOW {extra_detail ? "LESS" : "MORE"}
              </Button>
              <div
                className="extra-detail-section"
                style={{ display: extra_detail ? "" : "none" }}>
                <div className="paid_promotion paragraph">
                  <div className="label">Paid promotion</div>
                  <div className="description">
                    If you accepted anything of value from a third party to make
                    your video, you must let us know. We&apos;ll show viewers a
                    message telling them that your video contains paid
                    promotion.
                  </div>
                  <div className="paid-content label">
                    <Checkbox control={<Checkbox />} />
                    My video contains paid promotion like a product placement,
                    sponsorship or endorsement{" "}
                  </div>
                  <div className="description">
                    By selecting this box, you confirm that the paid promotion
                    follows our ad policies, and any applicable laws and
                    regulations. <span className="Mark">Learn more</span>
                  </div>
                </div>

                <div className="altered-content paragraph">
                  <div className="label">Altered content</div>
                  <div className="label">
                    Do any of the following describe your content?
                  </div>
                  <ul className="altered-condition">
                    <li>
                      Makes a real person appear to say or do something that
                      they didn&apos;t say or do
                    </li>
                    <li>Alters footage of a real event or place </li>
                    <li>
                      Generates a realistic-looking scene that didn&apos;t
                      actually occur
                    </li>
                  </ul>
                  <RadioGroup name="altered-content">
                    <FormControlLabel
                      label="Yes"
                      control={<Radio />}
                      value="Yes"
                    />
                    <FormControlLabel
                      label="No"
                      control={<Radio />}
                      value="No"
                    />
                  </RadioGroup>
                  <div className="description">
                    To follow YouTube&apos;s policy, you&apos;re required to
                    tell us if your content is altered or synthetic and seems
                    real. This includes realistic sounds or visuals made with AI
                    or other tools. Selecting &apos;Yes&apos; adds a label to
                    your content. <span className="Mark">Learn more</span>
                  </div>
                </div>
                <div className="Automatic-chapters paragraph">
                  <div className="label">Automatic chapters</div>
                  <div className="description">
                    Chapters and key moments make your video easier to watch.
                    You can overwrite automatic suggestions by creating your own
                    chapters in the video description.
                    <span className="Mark">Learn more</span>
                  </div>
                  <div className="label">
                    <Checkbox control={<Checkbox />} defaultChecked />
                    Allow automatic chapters and key moments
                  </div>
                </div>
                <div className="Featured-places paragraph">
                  <div className="label">Featured places</div>
                  <div className="description">
                    Help viewers explore key places in your video. These are
                    public places like restaurants and shops – we don &apos; t
                    display your current location or other private info.
                    <span className="Mark">Learn more</span>
                  </div>
                  <div className="label">
                    <Checkbox control={<Checkbox />} defaultChecked />
                    Allow automatic places
                  </div>
                </div>
                <div className="Automatic-concepts paragraph">
                  <div className="label">
                    Automatic concepts <span>Experiment</span>{" "}
                  </div>
                  <div className="description">
                    Help viewers learn more about unfamiliar terms without
                    leaving the video. Concepts mentioned in your video may
                    automatically appear in the description.
                  </div>
                  <div className="label">
                    <Checkbox control={<Checkbox />} defaultChecked />
                    Allow automatic concepts
                  </div>
                </div>
                <div className="Tags paragraph">
                  <div className="label">Tags</div>
                  <div className="description">
                    Tags can be useful if content in your video is commonly
                    misspelt. Otherwise, tags play a minimal role in helping
                    viewers to find your video.{" "}
                    <span className="Mark">Learn more</span>
                  </div>
                  <div className="tags-section">
                    <div
                      className="tags-input"
                      style={{
                        borderColor: tag_color ? "#3EA6FF" : "#6A6A6A",
                      }}>
                      {tags.map((tag, index) => (
                        <span key={index} className="tag">
                          <span>{tag}</span>{" "}
                          <button
                            className="material-symbols-outlined"
                            onClick={() => {
                              removetag(index);
                            }}>
                            close
                          </button>
                        </span>
                      ))}

                      <input
                        type="text"
                        value={input}
                        onFocus={handletagcolor}
                        onBlur={handletagcolor}
                        onChange={(e) => {
                          setinput(e.target.value);
                        }}
                        onKeyDown={handlekeydown}
                      />
                    </div>
                    <div className="description">
                      Enter a comma after each tag
                    </div>
                  </div>
                  <div className="language_caption">
                    <div className="label">
                      Language and captions certification
                    </div>
                    <div className="description">
                      Select your video s language and, if needed, a caption
                      certification
                    </div>
                    <Box><FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Tag
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox">
                        <MenuItem>Ten</MenuItem>
                      </Select>
                    </FormControl></Box>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
