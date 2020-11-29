import React, {Component} from 'react';
import {KEY, youtube} from '../apis/YouTube';
import SearchBar from './SearchBar';

export class App extends Component {
  state = {videos: []};

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
      this.setState({videos: response.data.items});
    } else {
      console.warn('Ooops! API call was unsuccessful');
    }
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
