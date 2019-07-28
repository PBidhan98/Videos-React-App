import React from 'react';
import VideoItem from './VideoItem';

//functional Component
const VideoList = ({videos}) => {
//returns a brand new array which contains list of video item components
  const renderedList = videos.map((video) => {
    return <VideoItem video={video}/>;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
