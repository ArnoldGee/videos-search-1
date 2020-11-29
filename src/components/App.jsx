import React, {Component} from 'react';
import {KEY, youtube} from '../apis/YouTube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

import './App.css';

export class App extends Component {
  state = {videos: [], selectedVideo: null};

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      },
    });
    if (response.data.items) {
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    } else {
      console.warn('Ooops! API call was unsuccessful');
    }
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
    console.log(video);
  };

  render() {
    const {videos, selectedVideo} = this.state;
    return (
      <div className="ui container">
        <h1 className="big-title"><span className="red">YouTube</span> procrastinator</h1>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="two-columns">
          <div>
            <VideoDetail video={selectedVideo} />
          </div>
          <div>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
