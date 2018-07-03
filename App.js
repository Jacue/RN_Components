import React, {Component} from 'react';

import {
    Image,
} from 'react-native';

//引入react-navigation依赖库
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

//展示的页面
import Home from './screens/home/home';
import ButtonSample from './screens/home/buttonSample';
import MaskViewSample from './screens/home/maskViewSample';
import Mine from './screens/mine/mine';

//Tab
const App = createBottomTabNavigator({
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
export default Navi = createStackNavigator({
  App: {
        screen: App,
  },
  ButtonSample: {
        screen: ButtonSample,
  },
  MaskViewSample: {
        screen: MaskViewSample,
  },
});