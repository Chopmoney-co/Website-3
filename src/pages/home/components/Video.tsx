import React from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";
import { ChopmoneyVideo, PlayIcon, VideoBg } from "../../../assets";

const Video = () => {
  return (
    <Player className="my-16 rounded-xl" poster={VideoBg} src={ChopmoneyVideo}>
      <BigPlayButton position="center" />

      <ControlBar
        autoHide={false}
        // disableDefaultControls={true}
      >
        <PlayToggle />
      </ControlBar>
    </Player>
  );
};

export default Video;
