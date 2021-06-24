import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>
      <div className="widgets__widgetConatiner">
        <h2>What's Happening</h2>
        <TwitterTweetEmbed tweetId={"1050663337464291329"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="msdhoni"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://aswin-search-engine.netlify.app/"}
          options={{ text: "Aswin is Awesome", via: "RajasekaraAswin" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
