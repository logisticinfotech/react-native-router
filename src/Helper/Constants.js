import React from "react";
import { Image, Dimensions, AsyncStorage } from "react-native";
var { EventEmitter } = require("fbemitter");

export const commonConstant = {
    // Error Messages
    alertTitle: "React Routing",
    emitter: new EventEmitter(),
    invalidEmail: "Please enter valid email address.",
    invalidPassword: "The Password length must be must be between 6 to 15.",
    // checkMailForResetPsw: "Please check your email for reset password link",
}