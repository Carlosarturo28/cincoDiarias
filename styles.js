import React from "react";
import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
    backgroundImage: {
        width,
        height
    },
    illImage: {
        width: 329,
        height: 310,
    },
    foregroundTextContainer: {
        top: -50,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    foregroundTextContainerLast: {
        top: -60,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    foregroundText: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginHorizontal: 26,
        letterSpacing: 0.41,
        color: "white"
    },
    buttonOnboarding: {
        position: 'absolute',
        top: height * 0.85,
        paddingRight: 40,
        paddingLeft: 40,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        shadowColor: '#702F2F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2
    },
    submitText: {
        color: '#DB6666',
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
    }
});