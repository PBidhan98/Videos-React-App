import React from 'react';
import VideoItem from './VideoItem';

//functional Component
const VideoList = ({videos}) => {
//returns a brand new array which contains list of video item components
  const renderedList = videos.map((video) => {
    return <VideoItem />;
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
