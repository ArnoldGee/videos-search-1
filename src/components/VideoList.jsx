import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  let RenderedList;
  if (videos.length) {
    RenderedList = videos.map((video, index) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      );
    });
  } else {
    RenderedList = [1, 2, 3, 4].map((item) => {
      return (
        <div key={item} className="ui fluid placeholder">
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <h2>Other videos</h2>
      <div className="ui relaxed divided list">{RenderedList}</div>
    </div>
  );
};

export default VideoList;
