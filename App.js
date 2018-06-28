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

}, {
    //设置TabNavigator的位置
    tabBarPosition: 'bottom',
    //是否在更改标签时显示动画
    animationEnabled: true,
    //是否允许在标签之间进行滑动
    swipeEnabled: false,
    //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    backBehavior: "none",
    //设置Tab标签的属性

    tabBarOptions: {
        //Android属性
        upperCaseLabel: false,//是否使标签大写，默认为true
        //共有属性
        showIcon: true,//是否显示图标，默认关闭
        showLabel: true,//是否显示label，默认开启
        activeTintColor: '#3097FD',//label和icon的前景色 活跃状态下（选中）
        inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
        style: { //TabNavigator 的背景颜色
            backgroundColor: 'white',
            height: 55,
        },
        indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
            height: 0,
        },
        labelStyle: {//文字的样式
            fontSize: 13,
            marginTop: -5,
            marginBottom: 5,
        },
        iconStyle: {//图标的样式
            marginBottom: 5,
        }
    },
});

/*
 * 初始化StackNavigator
 */
export default Navi = StackNavigator({
  App: {
      screen: App,
      navigationOptions: {
        title: '首页',
      },
  },
  button: {
      screen: button,
      navigationOptions: {
        title: '按钮',
      },
  },
});