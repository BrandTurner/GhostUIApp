//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, Platform, StatusBar } from 'react-native';
import { Icon, Container, Content, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardComponent from '../CardComponent';

import VideoList from '../VideoList';
import SearchBar from '../SearchBar';
import Loader from '../Loader';
import Api from '../../Utils/YoutubeApi';

// create a component
class HomeTab extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      isLoading: false,
      videos: ds.cloneWithRows([
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/i8OudJSZPFy2lcNph-s4_StYjlw"',
          id: {
            kind: 'youtube#video',
            videoId: '2t1hEQs_lFc',
          },
          kind: 'youtube#searchResult',
          snippet: {
            channelId: 'UCKTkRSqdSzjGb7c0XmPldaQ',
            channelTitle: 'MrGamer Fan',
            description:
              'Video used for entertainment purposes only. (Disclaimer) All material used is copyright of The Pokémon Company, ShoPro, Koch and Nintendo!! Help this video get 1 million views (Over 600K...',
            liveBroadcastContent: 'none',
            publishedAt: '2016-12-20T04:37:16.000Z',
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/hqdefault.jpg',
                width: 480,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/mqdefault.jpg',
                width: 320,
              },
            },
            title: 'Pokémon Origins FULL Movie English Dub',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/i8OudJSZPFy2lcNph-s4_StYjlw"',
          id: {
            kind: 'youtube#video',
            videoId: '2t1hEQs_lFc',
          },
          kind: 'youtube#searchResult',
          snippet: {
            channelId: 'UCKTkRSqdSzjGb7c0XmPldaQ',
            channelTitle: 'MrGamer Fan',
            description:
              'Video used for entertainment purposes only. (Disclaimer) All material used is copyright of The Pokémon Company, ShoPro, Koch and Nintendo!! Help this video get 1 million views (Over 600K...',
            liveBroadcastContent: 'none',
            publishedAt: '2016-12-20T04:37:16.000Z',
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/hqdefault.jpg',
                width: 480,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/2t1hEQs_lFc/mqdefault.jpg',
                width: 320,
              },
            },
            title: 'Pokémon Origins FULL Movie English Dub',
          },
        },
      ]),
    };
  }

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => <Icon name="ios-home" style={{ color: tintColor }} />,
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>


            <SearchBar onSubmit={this._searchData.bind(this)} />
            <VideoList items={this.state.videos} navigator={this.props.navigation} />

        </Content>
      </Container>
    );
  }

  _searchData(query) {
    this.setState({ isLoading: true, videos: this.state.videos.cloneWithRows([]) });
    Api.search(query).then(data => {
      this.setState({
        videos: this.state.videos.cloneWithRows(data.items),
        isLoading: false,
      });
    });
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navBar: {
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightNav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 25,
  },
  body: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0.5,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTitle: {
    fontSize: 11,
    color: '#3c3c3c',
    paddingTop: 4,
  },
});

//make this component available to the app
export default HomeTab;

/*
<Container style={styles.container}>
        <Content>
          <Grid>ß
            <Row>
              <Text>Heder Element</Text>
            </Row>

            <Row>
              <CardComponent imageSource="1" likes="101" />
            </Row>
            <Row>
              <CardComponent imageSource="2" likes="101" />
            </Row>
            <Row>
              <CardComponent imageSource="3" likes="101" />
            </Row>
          </Grid>
        </Content>
      </Container>
      */
