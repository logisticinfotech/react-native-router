import { Alert } from "react-native";

export function showAlert(
    message,
    title = "Reactrouting",
    buttonTitle = "OK"
) {
    setTimeout(() => {
        Alert.alert(title, message, [{ text: buttonTitle }]);
    }, 200);
}
export function showAlertWithOkBtn(
    message,
    title = "Reactrouting",
    buttonTitle = "OK"
) {
    // setTimeout(() => {
    return new Promise((resolve, reject) => {
        Alert.alert(title, message, [
            { text: buttonTitle, onPress: () => resolve(""), style: "cancel" }
        ]);
    });
    // }, 200);
}
