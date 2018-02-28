import React, { Component } from 'react';

import { Image, View, Text, TouchableOpacity } from 'react-native';

// 3rd party libraries
import Moment from 'moment';

// Component
//import Detail from './../Views/DetailPage';
import styles from '../Styles/VideoComponent.Styles';

const VideoComponent = ({ video, videos, navigator, type = 'list', onVideoSelect }) => {
  _showListVersion = video => {
    return (
      <View style={styles.listItem}>
        <Image style={styles.videoImage} source={{ uri: video.snippet.thumbnails.high.url }} />
        <View style={styles.videoContainer}>
          <View style={styles.videoIconChannelContainer}>
            <View style={styles.videoIconChannel} />
          </View>
          <View style={styles.videoTextContainer}>
            <Text style={styles.videoTitle}>
              {video.snippet.title.length > 30 ? video.snippet.title.substring(0, 32 - 3) + '...' : video.snippet.title}
            </Text>
            <Text style={styles.videoDescription}>
              {video.snippet.channelTitle.length > 30
                ? video.snippet.channelTitle.substring(0, 30 - 3) + '...'
                : video.snippet.channelTitle}
              - {Moment(video.snippet.publishedAt).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        //if (onVideoSelect) onVideoSelect(video);
        console.log(video)
        navigator.navigate('DetailTab', {
          video: video,
          videos: videos
        });
      }}
    >
      {this._showListVersion(video)}
    </TouchableOpacity>
  );
};

export default VideoComponent;
