//import liraries
import React, { Component } from 'react';
import { View, StyleSheet, ListView, Platform, StatusBar, Image, WebView, Dimensions } from 'react-native';
import {
  Container,
  Content,
  List,
  Header,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import CardComponent from '../CardComponent';
import Swiper from 'react-native-swiper';
import Youtube from 'react-native-youtube';

import VideoList from '../VideoList';
import SearchBar from '../SearchBar';
import Loader from '../Loader';
import Api from '../../Utils/YoutubeApi';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// create a component
class NewCutscenesTab extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      isLoading: false,
      videos: ds.cloneWithRows([
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/zjEnCGconlA6cPf35B5q-EbZpfg"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC4xMkVGQjNCMUM1N0RFNEUx',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 0,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: 'RG2lZ2PS8fc',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/RG2lZ2PS8fc/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/RG2lZ2PS8fc/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/RG2lZ2PS8fc/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/RG2lZ2PS8fc/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/RG2lZ2PS8fc/sddefault.jpg',
                width: 640,
              },
            },
            title: '00 Des2ny Opening 1080p',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/BUkMbqKCNnxTte91AQbkrkPQeAc"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC4wOTA3OTZBNzVEMTUzOTMy',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 1,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: '8O0FuyDOWF8',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/8O0FuyDOWF8/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/8O0FuyDOWF8/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/8O0FuyDOWF8/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/8O0FuyDOWF8/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/8O0FuyDOWF8/sddefault.jpg',
                width: 640,
              },
            },
            title: '01 Des2ny TowerAttack 1080p',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/AdRRw0aNpCz4_qTU3uvxw7izYPw"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC41MjE1MkI0OTQ2QzJGNzNG',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 2,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: 'w0z5BzY87EI',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/w0z5BzY87EI/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/w0z5BzY87EI/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/w0z5BzY87EI/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/w0z5BzY87EI/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/w0z5BzY87EI/sddefault.jpg',
                width: 640,
              },
            },
            title: '02 Des2ny TowerApproach 1080p',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/3eK0VQMuoYn2lklSbpLgKyzCOO4"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC4wMTcyMDhGQUE4NTIzM0Y5',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 3,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: 'vA0KrEtHb64',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/vA0KrEtHb64/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/vA0KrEtHb64/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/vA0KrEtHb64/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/vA0KrEtHb64/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/vA0KrEtHb64/sddefault.jpg',
                width: 640,
              },
            },
            title: '03 Des2ny AmandaPickup 1080p',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/mMs3ttB1awacnOQEgAAV7zJiu9A"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC4yODlGNEE0NkRGMEEzMEQy',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 4,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: 'OowqTKkURGs',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/OowqTKkURGs/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/OowqTKkURGs/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/OowqTKkURGs/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/OowqTKkURGs/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/OowqTKkURGs/sddefault.jpg',
                width: 640,
              },
            },
            title: '04 Des2ny GhaulMeet 1080p',
          },
        },
        {
          etag: '"_gJQceDMxJ8gP-8T2HLXUoURK8c/qMiqW0BGKG_cGASRYbgK4TVzJAU"',
          id: 'UExOWFFXTXFpU00zQms4T3JoSXFPa3FXaEc5WUZudmtLWC41NkI0NEY2RDEwNTU3Q0M2',
          kind: 'youtube#playlistItem',
          snippet: {
            channelId: 'UC-xhwwaBcVcoEVZ6GXbspqw',
            channelTitle: 'Brandon Turner',
            description: '',
            playlistId: 'PLNXQWMqiSM3Bk8OrhIqOkqWhG9YFnvkKX',
            position: 5,
            publishedAt: '2018-03-01T02:58:46.000Z',
            resourceId: {
              kind: 'youtube#video',
              videoId: 'cal0wj5VklU',
            },
            thumbnails: {
              default: {
                height: 90,
                url: 'https://i.ytimg.com/vi/cal0wj5VklU/default.jpg',
                width: 120,
              },
              high: {
                height: 360,
                url: 'https://i.ytimg.com/vi/cal0wj5VklU/hqdefault.jpg',
                width: 480,
              },
              maxres: {
                height: 720,
                url: 'https://i.ytimg.com/vi/cal0wj5VklU/maxresdefault.jpg',
                width: 1280,
              },
              medium: {
                height: 180,
                url: 'https://i.ytimg.com/vi/cal0wj5VklU/mqdefault.jpg',
                width: 320,
              },
              standard: {
                height: 480,
                url: 'https://i.ytimg.com/vi/cal0wj5VklU/sddefault.jpg',
                width: 640,
              },
            },
            title: '05 Des2ny Vision 1080p',
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
          <Card>
            <CardItem cardBody style={{ padding: 0, margin: 0 }}>
              <Image style={styles.archiveImg} source={require('../../assets/archive_sections/cutscenes.png')} />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card style={{ height: 250 }}>
            <CardItem cardBody>
              <Swiper
                loop={false}
                showsButtons={true}
                buttonWrapperStyle={{
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  flex: 1,
                  paddingHorizontal: 10,
                  paddingVertical: 10,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                }}
                showsVerticalScrollIndicator={false}
                showsPagination={true}
                onScrollBeginDrag={this.forwards}
                removeClippedSubviews={false}
                nextButton={
                  <Text style={styles.iconBorder}>
                    <Icon active={true} name="play" style={{ color: 'white' }} />
                  </Text>
                }
                prevButton={
                  <Text style={styles.iconBorder}>
                    <Icon name="arrow-dropleft" style={{ color: 'white' }} />
                  </Text>
                }
              >
                <WebView
                  style={styles.image}
                  source={{ uri: `https://www.youtube.com/embed/RG2lZ2PS8fc?showinfo=0&rel=0` }}
                  onLoadStart={() => this.setState({ showSpinner: true })}
                  onLoadEnd={() => this.setState({ showSpinner: false })}
                />

                <WebView
                  style={styles.image}
                  source={{ uri: `https://www.youtube.com/embed/8O0FuyDOWF8?showinfo=0&rel=0` }}
                  onLoadStart={() => this.setState({ showSpinner: true })}
                  onLoadEnd={() => this.setState({ showSpinner: false })}
                />

                <WebView
                  style={styles.image}
                  source={{ uri: `https://www.youtube.com/embed/w0z5BzY87EI?showinfo=0&rel=0` }}
                  onLoadStart={() => this.setState({ showSpinner: true })}
                  onLoadEnd={() => this.setState({ showSpinner: false })}
                />
              </Swiper>
            </CardItem>
          </Card>
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
  image: {
    width: null,
    height: 100,
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
  iconBorder: {
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    color: 'white',
    paddingLeft: 8,
    paddingRight: 5,
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
  archiveImg2: {
    flex: 1,
    width: width,
    height: 200,
    resizeMode: 'contain',
  },
  archiveImg: {
    flex: 1,
    width: width,
    height: 500,
    resizeMode: 'contain',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {},
});

//make this component available to the app
export default NewCutscenesTab;
