import React from "react";
import {
  Animated,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  ToastAndroid,
  AsyncStorage,
  StatusBar,
  Button
} from "react-native";

import {
  ParallaxSwiper,
  ParallaxSwiperPage
} from "./parallaxOnboarding";
import Spinner from 'react-native-loading-spinner-overlay';
import Styles from './styles';
import Api from './Components/Integrations/Api';
import { Actions } from 'react-native-router-flux';

export default class Onboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createUser: false
    }
  }
  myCustomAnimatedValue = new Animated.Value(0);

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.createUser === this.state.createUser
  }

  getPageTransformStyle = index => ({
    transform: [
      {
        scale: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8), // Add 8 for dividerWidth
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: [0, 1, 0],
          extrapolate: "clamp"
        })
      },
      {
        rotate: this.myCustomAnimatedValue.interpolate({
          inputRange: [
            (index - 1) * (width + 8),
            index * (width + 8),
            (index + 1) * (width + 8)
          ],
          outputRange: ["180deg", "0deg", "-180deg"],
          extrapolate: "clamp"
        })
      }
    ]
  });

  renderLoadingView() {
    return <Spinner visible />;
  }

  async redirectHome() {
    const idValue = new Date();
    const userId = idValue.getTime();
    AsyncStorage.setItem('firstTime', 'true');
    AsyncStorage.setItem('user', userId.toString());

    let createUser;
    try {
      createUser = await Api.createUser(userId);
      Actions.home();
    } catch (error) {
      throw error;
    }
  }

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
        />
        <ParallaxSwiper
          speed={0.5}
          animatedValue={this.myCustomAnimatedValue}
          dividerWidth={0}
          dividerColor="black"
          backgroundColor="#6EBECD"
          onMomentumScrollEnd={activePageIndex => console.log('hola')}
          showProgressBar={false}
          progressBarBackgroundColor="rgba(255,255,255,0.65)"
          progressBarValueBackgroundColor="white"
        >
          <ParallaxSwiperPage
            BackgroundComponent={
              <Image
                style={Styles.backgroundImage}
                source={require('./assets/img/bgUno.png')}
              />
            }
            ForegroundComponent={
              <View style={Styles.foregroundTextContainer}>
                <Image
                  style={Styles.illImage}
                  source={require('./assets/img/illUno.png')}
                />
                <Text
                  style={Styles.foregroundText}
                >
                  Desliza a la izquierda para descartar las palabras que no consideres importantes o que ya conozcas.
              </Text>
              </View>
            }
          />
          <ParallaxSwiperPage
            BackgroundComponent={
              <Image
                style={Styles.backgroundImage}
                source={require('./assets/img/bgDos.png')}
              />
            }
            ForegroundComponent={
              <View style={Styles.foregroundTextContainer}>
                <Image
                  style={Styles.illImage}
                  source={require('./assets/img/illDos.png')}
                />
                <Text
                  style={Styles.foregroundText}
                >
                  Desliza a la derecha para guardar las palabras que no conozcas o que quieras conservar para el futuro.
              </Text>
              </View>
            }
          />
          <ParallaxSwiperPage
            BackgroundComponent={
              <Image
                style={Styles.backgroundImage}
                source={require('./assets/img/bgTres.png')}
              />
            }
            ForegroundComponent={
              <View style={Styles.foregroundTextContainerLast}>
                <Image
                  style={Styles.illImage}
                  source={require('./assets/img/illTres.png')}
                />
                <Text
                  style={Styles.foregroundText}
                >
                  Mira las palabras que has guardado y practica con ellas.
              </Text>
                <TouchableWithoutFeedback disabled={this.state.createUser}
                  onPress={() => {this.setState({
                  createUser: true});
                  this.renderLoadingView(); 
                  this.redirectHome()
                }}
                >
                  <View style={Styles.buttonOnboarding}>
                    <Text style={Styles.submitText}>Comenzar</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            }
          />
        </ParallaxSwiper>
      </View>
    );
  }
}
