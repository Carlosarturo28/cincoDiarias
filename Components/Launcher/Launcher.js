import React from "react";
import { AsyncStorage, Text, View, Image } from "react-native";
import { Actions } from 'react-native-router-flux';
import Styles from './styles';

export default class Launcher extends React.Component {


    async componentDidMount() {
        try {
            const value = JSON.parse(await AsyncStorage.getItem('firstTime'));
            console.log(`este es el key: ${JSON.stringify(value)}`);
            if (value) {
                console.log('ya se ha registrado');
                Actions.reset('home');
            } else {
                console.log('no se ha registrado');
                Actions.reset('onboarding');
            }
        } catch (error) {
            console.log('error', error);
        }
    }


    render() {
        return (
            <View style={Styles.container}>
            <View style={Styles.containerImage}>
                <Image
                    style={Styles.logo}
                    source={require('../../assets/img/logoWhite.png')}
                />
                </View>
            </View>
        );
    }

}