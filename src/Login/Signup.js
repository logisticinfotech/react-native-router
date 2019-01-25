import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity,AsyncStorage, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from "./SignupStyles";
import * as validation from "../Helper/Validate"
import * as Alerts from '../Helper/Alerts'
import * as constant from '../Helper/Constants'
export default class Signup extends Component {
    static navigationOptions = {
        title: "Login"
    }
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }
    btnSigninPress = () => {
        let email = this.state.email;
        let pwdValue = this.state.password;
        Keyboard.dismiss();

        if (!validation.validateEmail(email)) {
            Alerts.showAlert(constant.commonConstant.invalidEmail);
        } else if (!validation.validatePassword(pwdValue)) {
            Alerts.showAlert(constant.commonConstant.invalidPassword);
        }
        else {
            let userData = {
                email: this.state.email,
                password: this.state.password,
            }
            AsyncStorage.setItem("userData", JSON.stringify(userData))
            constant.commonConstant.emitter.emit("loginEvent", "ok");
        }
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground style={{ flex: 1 }}
                    resizeMode='cover'
                    source={require('../Resources/bg.png')}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                            <Image source={require('../Resources/left-arrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.viewLogo}>
                        <Image source={require('../Resources/logo.png')}></Image>
                    </View>
                    <View style={{ marginTop: 80 }}>
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={txt => this.setState({ email: txt })}
                            value={this.state.email}
                            placeholder="Email ID"
                            style={styles.txtEmail}
                            onSubmitEditing={() => {
                                this.Password.focus();
                            }}
                        />
                        <TextInput
                            autoCapitalize="none"
                            onChangeText={txt => this.setState({ password: txt })}
                            placeholder="Password"
                            style={styles.txtPwd}
                            value={this.state.password}
                            secureTextEntry={true}
                            returnKeyType="done"
                            ref={input => {
                                this.Password = input;
                            }}
                        />
                        <TouchableOpacity onPress={this.btnSigninPress}>
                            <View style={styles.viewBtnLogin}>
                                <Text style={styles.btnTxtLogin}>Sign In</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
            </View>
        );
    }
}
