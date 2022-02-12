import React from "react";
import ReactPlayer from "react-player";

export const test = () => {
  return (
    <div>
      <ReactPlayer
        controls
        url="https://cdn.videosdk.live/encoded/videos/a390ba1d-6cb2-450a-a84f-e9c93bc06b05/index.m3u8"
      />
    </div>
  );
};

export default test;
