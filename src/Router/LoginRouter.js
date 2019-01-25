import { createStackNavigator, createAppContainer } from "react-navigation";

import Signup from "../Login/Signup";
import Login from "../Login/Login";

// Main Navigation Flow

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
        },
        Signup: {
            screen: Signup,
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: "none",
        navigationOptions: {
            header: null,
        },
    },
);
export default createAppContainer(AppNavigator);
