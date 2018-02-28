const ReactNative = require('react-native');

import React, { Component } from 'react';
import { Icon } from 'native-base';

const { ActivityIndicator, Text, View, WebView } = ReactNative;

// Third parties
import Moment from 'moment';
//import Icon from 'react-native-vector-icons/FontAwesome';

// Components
//import Header from './../Components/Header';
import styles from '../../Styles/VideoComponent.Styles';
import VideoList from '../VideoList';
import YouTube from 'react-native-youtube';

export default class DetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = { showSpinner: true, selectedVideo: this.props.navigation.state.params.video };
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-heart" style={{ color: tintColor }} />,
  };
  render() {
    let { key, videos, navigator } = this.props.navigation.state.params;
    let video = this.state.selectedVideo;
    {
      video.id.videoId;
    }
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <YouTube
          videoId={video.id.videoId} // The YouTube video ID
          play={true} // control playback of video with true/false
          fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={{ alignSelf: 'stretch', height: 300 }}
        />

        <View style={{ flex: 5, flexDirection: 'column' }}>
          <VideoList
            items={videos}
            navigator={navigator}
            style={{ marginTop: 0 }}
            type="grid"
            onVideoSelect={selectedVideo => {
              this.setState({ selectedVideo });
            }}
          />
        </View>
      </View>
    );
  }
}
