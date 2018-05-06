import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator, StackNavigator } from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';
import DetailTab from './AppTabNavigator/DetailTab';
import CutscenesTab from './AppTabNavigator/CutscenesTab';
import NewCutscenesTab from './AppTabNavigator/NewCutscenesTab';
import GrimoireTab from './AppTabNavigator/GrimoireTab';
import GuardianScreen from './AppTabNavigator/GuardianScreen';
import ClassesScreen from './AppTabNavigator/ClassesScreen';

import GuardiansCard from './AppTabNavigator/GuardiansCard';

// export const GrimoireStack = StackNavigator({
//   GrimoireScreen: {
//     screen: GrimoireTab,
//     navigationOptions: {
//       title: 'Grimoire',
//       headerMode: 'float',
//     },
//   },
//   GuardianScreen: {
//     screen: GuardianScreen,
//     navigationOptions: {
//       title: 'Guardian',
//       headerMode: 'float',
//     },
//   },
//   ClassesScreen: {
//     screen: ClassesScreen,
//     navigationOptions: {
//       title: 'Classes',
//       headerMode: 'float',
//     },
//   },
//   GuardiansCard: {
//     screen: GuardiansCard,
//     navigationOptions: {
//       title: 'Guardians',
//       headerMode: 'float'
//     }
//   }
// });

export default class MainScreen extends React.Component {
  /* static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    title: 'Instagram',
    headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />,
  }; */

  render() {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        headerMode: 'float',
      },
    },
    // DetailTab: {
    //   screen: DetailTab,
    // },
    CutscenesTab: {
      screen: CutscenesTab,
    },
    NewCutscenesTab: {
      screen: NewCutscenesTab,
    },
    GrimoireTab: {
      screen: GrimoireTab,
      navigationOptions: {
        headerMode: 'float',
      },
    },
  },
  {
    initialRouteName: 'HomeTab',
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: 'white',
          },
        }),
      },
      activeTintColor: '#000',
      inactiveTintColor: '#d1cece',
    },
    navigationOptions: {
      headerMode: 'float',
    },
  },
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
