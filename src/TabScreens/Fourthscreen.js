import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, ImageBackground, TouchableOpacity, AsyncStorage } from 'react-native';
import * as constant from '../Helper/Constants'
export default class Fourthscreen extends Component {
    static navigationOptions = {
        tabBarLabel: "Second",
        header: false,
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../Resources/more.png")}
                style={[{ tintColor: tintColor }]}
            />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    logOut = () => {
        AsyncStorage.removeItem('userData')
        constant.commonConstant.emitter.emit("logout", "ok");
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgb(214, 240, 239)" }}>
                <Text style={{ marginTop: 50, marginLeft: 30, fontSize: 30, fontWeight: '700', }}>Fourth Screen</Text>
                <View style={{
                    height: '77%', backgroundColor: 'white', margin: 25, borderRadius: 20, overflow: 'hidden', shadowColor: 'black',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 4,
                }}>
                    <Image source={require("../Resources/logout.jpg")} style={{ width: '100%', height: '80%' }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                        <TouchableOpacity onPress={this.logOut} style={{ backgroundColor: "rgb(214, 240, 239)", borderRadius: 10, width: '83%', height: '45%', justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 17, fontWeight: 'bold', }}>Logout Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


}
