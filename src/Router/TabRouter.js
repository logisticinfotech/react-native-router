import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Firstscreen from '../TabScreens/Firstscreen';
import Secondscreen from '../TabScreens/Secondscreen';
import Thirdscreen from '../TabScreens/Thirdscreen';
import Fourthscreen from '../TabScreens/Fourthscreen';

const mainTab = createBottomTabNavigator(
    {
        Firstscreen: Firstscreen,
        Secondscreen: Secondscreen,
        Thirdscreen: Thirdscreen,
        Fourthscreen: Fourthscreen,
    },
    {
        tabBarPosition: "bottom",
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: 'rgb(125,107,255)',
            indicatorStyle: {
                backgroundColor: "#A1A1A1",
                height: 1,
            },
            labelStyle: {
                fontSize: 8,
                color: "#A1A1A1",
            },
            style: {
                backgroundColor: 'rgb(255,255,255)',
            },
            scrollEnabled: false,
            showLabel: false,
            showIcon: true,
        },
    }
);

export default createAppContainer(mainTab)