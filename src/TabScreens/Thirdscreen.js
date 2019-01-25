import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground } from 'react-native';

export default class Thirdscreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Four",
        header: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../Resources/graph.png")}
                style={[{ tintColor: tintColor, width: 18, height: 18 }]}
            />
        ),
    };
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }}
                    resizeMode='cover'
                    source={require('../Resources/bg.png')}>

                    <Text style={{ marginTop: 50, marginLeft: 30, fontSize: 30, fontWeight: '700' }}>Third Screen</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginTop: 50, marginLeft: 30, marginRight: 30, height: 200, borderRadius: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', fontStyle: 'italic' }}>This is Analytic Screen</Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }


}
