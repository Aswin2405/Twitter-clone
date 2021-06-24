import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Aswin",
      username: "aswin24",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101010435_290858905267359_2546565656887689216_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=n0w8KFMakS4AX81e7sZ&oh=aceb1e62d43ab2ec842839ac2ffa0a22&oe=5F8FE1DA"
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://instagram.fixm1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101010435_290858905267359_2546565656887689216_n.jpg?_nc_ht=instagram.fixm1-1.fna.fbcdn.net&_nc_ohc=n0w8KFMakS4AX81e7sZ&oh=aceb1e62d43ab2ec842839ac2ffa0a22&oe=5F8FE1DA" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__Imageinput"
          placeholder="Optional: Enter Image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
