import React from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";
import { ChopmoneyVideo, VideoBg } from "../../../assets";

const Video = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1500">
      <Player
        className="my-16 rounded-xl"
        poster={VideoBg}
        src={ChopmoneyVideo}
      >
        <BigPlayButton position="center" />

        <ControlBar
          autoHide={false}
          // disableDefaultControls={true}
        >
          <PlayToggle />
        </ControlBar>
      </Player>
    </div>
  );
};

export default Video;
