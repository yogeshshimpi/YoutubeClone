import React from "react";
import "./Aside.css";
import homelogo from "../../assets/homelogo.svg";
import shortslog from "../../assets/shortslog.svg";
import subscriptionlogo from "../../assets/subscriptionlogo.svg";
import youtubemusiclogo from "../../assets/youtubemusiclogo.svg";
import Your_channel from "../../assets/Your channel.svg";
import history from "../../assets/History.svg";
import playlist from "../../assets/Playlists.svg";
import your_video from "../../assets/Your videos.svg";
import watch_later from "../../assets/Watch Later.svg";
import liked_video from "../../assets/Liked videos.svg";
import download from "../../assets/Downloads.svg";
import trending from "../../assets/Trending.svg";
import shopping from "../../assets/Shopping.svg";
import music from "../../assets/Music.svg";
import films from "../../assets/Films.svg";
import live from "../../assets/Live.svg";
import gaming from "../../assets/Gaming.svg";
import news from "../../assets/News.svg";
import sport from "../../assets/Sport.svg";
import courses from "../../assets/Courses.svg";
import fashion_beauty from "../../assets/Fashion & beauty.svg";
import podcasts from "../../assets/Podcasts.svg";
import youtube_studio from "../../assets/YouTube Studio.svg";
import youtube_kids from "../../assets/YouTube Kids.svg";
import settings from "../../assets/Settings.svg";
import report_history from "../../assets/Report history.svg";
import help from "../../assets/Help.svg";
import send_feedback from "../../assets/Send feedback.svg";

const Aside = () => {
  return (
    <section className="aside">
      <button className="option">
        <img className='svg' src={homelogo} alt="" />
        Home
      </button>
      <button className="option">
        <img className='svg' src={shortslog} alt="" />
        Shorts
      </button>
      <button className="option">
        <img className='svg' src={subscriptionlogo} alt="" />
        Subscriptions
      </button>
      <button className="option">
        <img className='svg' src={youtubemusiclogo} alt="" />
        YouTube Music
      </button>
      <span className="span"></span>
      <button className="option">You</button>
      <button className="option">
        <img className='svg' src={Your_channel} alt="" />
        Your channel
      </button>
      <button className="option">
        <img className='svg' src={history} alt="" />
        History
      </button>
      <button className="option">
        <img className='svg' src={playlist} alt="" />
        Playlists
      </button>
      <button className="option">
        <img className='svg' src={your_video} alt="" />
        Your videos
      </button>
      <button className="option">
        <img className='svg' src={watch_later} alt="" />
        Watch Later
      </button>
      <button className="option">
        <img className='svg' src={liked_video} alt="" />
        Liked videos
      </button>
      <button className="option">
        <img className='svg' src={download} alt="" />
        Downloads
      </button>
      <span className="span"></span>
      <button className="text">Subscriptions</button>
      <span className="span"></span>
      <button className="text">Explore</button>
      <button className="option">
        <img className='svg' src={trending} alt="" />
        Trending
      </button>
      <button className="option">
        <img className='svg' src={shopping} alt="" />
        Shopping
      </button>
      <button className="option">
        <img className='svg' src={music} alt="" />
        Music
      </button>
      <button className="option">
        <img className='svg' src={films} alt="" />
        Films
      </button>
      <button className="option">
        <img className='svg' src={live} alt="" />
        Live
      </button>
      <button className="option">
        <img className='svg' src={gaming} alt="" />
        Gaming
      </button>
      <button className="option">
        <img className='svg' src={news} alt="" />
        News
      </button>
      <button className="option">
        <img className='svg' src={sport} alt="" />
        Sport
      </button>
      <button className="option">
        <img className='svg' src={courses} alt="" />
        Courses
      </button>
      <button className="option">
        <img className='svg' src={fashion_beauty} alt="" />
        Fashion & beauty
      </button>
      <button className="option">
        <img className='svg' src={podcasts} alt="" />
        Podcasts
      </button>
      <span className="span"></span>
      <button className="text">More from YouTube</button>
      <button className="option">
        <img className='svg' src={youtube_studio} alt="" />
        YouTube Studio
      </button>
      <button className="option">
        <img className='svg' src={youtubemusiclogo} alt="" />
        YouTube Music
      </button>
      <button className="option">
        <img className='svg' src={youtube_kids} alt="" />
        YouTube Kids
      </button>
      <span className="span"></span>
      <button className="option">
        <img className='svg' src={settings} alt="" />
        Settings
      </button>
      <button className="option">
        <img className='svg' src={report_history} alt="" />
        Report history
      </button>
      <button className="option">
        <img className='svg' src={help} alt="" />
        Help
      </button>
      <button className="option">
        <img className='svg' src={send_feedback} alt="" />
        Send feedback
      </button>
      <span className="span"></span>
      <div className="copyright">
        About Press Copyright Contact us Creators Advertise Developers
      </div>
      <div className="copyright">
        Terms Privacy Policy & Safety How YouTube works Test new features
      </div>
      <div className="copyright" color="gray">© 2024 Google LLC</div>
    </section>
  );
};

export default Aside;
