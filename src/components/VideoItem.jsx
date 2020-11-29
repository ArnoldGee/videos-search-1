import React from 'react';

const videoItemCSS = {display: 'flex', alignItems: 'center', cursor: 'pointer'};

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="item video-item" style={videoItemCSS}>
      <img
        className="ui small rounded image"
        src={video.snippet.thumbnails.medium.url}
        alt=""
      />
      <div className="content">
        <a className="header" onClick={() => onVideoSelect(video)}>
          {video.snippet.title}{' '}
          <div className="ui label">
            <i className="youtube icon" style={{userSelect: 'auto'}}></i>
            {video.snippet.channelTitle}
          </div>
        </a>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
