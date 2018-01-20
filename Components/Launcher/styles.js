import React from "react";
import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#6EBECD'
},
logo: {
    marginTop: 10,
    width: 209,
    height: 70
},
containerImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}
});