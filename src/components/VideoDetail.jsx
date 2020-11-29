import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return (
      <div className="ui segment">
        <h1>
          <div
            className="ui inline loader active"
            style={{marginRight: "10px"}}
          ></div>{' '}
          Search a video to start!
        </h1>
        <div className="ui placeholder fluid">
          <div className="image large" style={{height: '40vh'}}></div>
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui segment">
        <h1>{video.snippet.title}</h1>
        <div className="ui embed">
          <iframe title="video"
            src={'https://www.youtube.com/embed/' + video.id.videoId}
          ></iframe>
        </div>
        <h3 className="header">
          <i className="youtube icon" style={{userSelect: 'auto'}}></i>
          {video.snippet.channelTitle}
        </h3>
        <div className="paragraph">{video.snippet.description}</div>
      </div>
    );
  }
};

export default VideoDetail;
