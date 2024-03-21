import React from "react";
import { Player, BigPlayButton, ControlBar, PlayToggle } from "video-react";

const Video = () => {
  return (
    <Player
      className="my-16"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >
      <BigPlayButton position="center" />
      <ControlBar autoHide={false} disableDefaultControls={true}>
        <PlayToggle />
      </ControlBar>
    </Player>
  );
};

export default Video;
