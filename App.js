import React, {Component} from 'react';

import {
    Image,
} from 'react-native';

//引入react-navigation依赖库
import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

//展示的页面
import Home from './Screens/Home/home';
import button from './Screens/Home/button';
import Mine from './Screens/Mine/mine';

//Tab
const App = TabNavigator({
    //每一个页面的配置
    Home: {
        screen: Home,
        navigationOptions: {
            //tab 的属性
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_home.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
            ),
  
        },
      },
      Mine: {
        screen: Mine,
        navigationOptions: {
            //tab 的属性
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={require('./images/ic_me.png')}
                    style={[{height: 24, width: 24}, {tintColor: tintColor}]}
                />
            ),
        }
      },
});

App.navigationOptions = ({ navigation }) => {
    let titles = ['首页','我的'];
    let headerTitle = titles[navigation.state.index];
    return {headerTitle};
};

/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
  App: {
      screen: App,
  },
  button: {
      screen: button,
  },
});