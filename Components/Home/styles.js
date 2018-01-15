import React from "react";
import {
    StyleSheet,
    Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window");

module.exports = StyleSheet.create({
    box1: {
        flex: 1
      },
      container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
      },
      card: {
        width: '100%',
        borderRadius: 12,
        borderWidth: 0,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: '#0096A6',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4
      },
      word: {
        textAlign: 'left',
        fontSize: 36,
        fontFamily: 'Montserrat-Medium',
        color: '#00213F',
        marginTop: 14,
        marginLeft: 26,
        backgroundColor: 'transparent'
      },
      description: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'Montserrat-Light',
        color: '#666666',
        marginTop: 10,
        marginLeft: 26,
        backgroundColor: 'transparent'
      },
      example: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Montserrat-LightItalic',
        color: '#999999',
        marginTop: 10,
        marginLeft: 26,
        backgroundColor: 'transparent'
      },
      grammar: {
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: '#B3B3B3',
        marginTop: 10,
        marginLeft: 26,
        marginBottom: 24,
        backgroundColor: 'transparent'
      },
      done: {
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
        backgroundColor: 'transparent'
      }
});