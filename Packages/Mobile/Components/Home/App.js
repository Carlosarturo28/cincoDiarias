import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import {
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
  Linking,
  Modal,
  View,
  Dimensions,
  Image,
  ToastAndroid,
  AsyncStorage
} from 'react-native';
import Styles from './styles';
import SwiperContainer from './SwiperContainer';
import { Actions } from 'react-native-router-flux';
import Api from '../Integrations/Api';
import Spinner from 'react-native-loading-spinner-overlay';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: null,
      swipedAllCards: false,
      swipeDirection: '',
      isSwipingBack: false,
      cardIndex: 0,
      modalVisible: false,
      swipedAllTime: null
    }
  }

  componentDidMount() {
    this.getCards();
  }

  async getCards() {
    let user;

    try {
      user = await AsyncStorage.getItem('user');
    } catch (error) {
      throw error;
    }

    let swipedAllTime;

    try {
      swipedAllTime = await AsyncStorage.getItem('swipedAllTime');
      swipedAllTime = swipedAllTime == null ? 0 : swipedAllTime;
    } catch (error) {
      throw error;
    }

    let cardsApi;
    try {
      cardsApi = await Api.consultarCards(user);
    } catch (error) {
      throw error;
    }
    this.setState({ cards: cardsApi, swipedAllTime: parseInt(swipedAllTime) })
  }

  renderLoadingView() {
    return <Spinner visible />;
  }

  openModal() {
    this.setState({ modalVisible: true });
  }

  closeModal() {
    this.setState({ modalVisible: false, });
  }

  renderCards() {
    const actualDate = new Date();
    const currentTime = actualDate.getTime();
    const dif = currentTime - this.state.swipedAllTime;

    console.log(this.state.swipedAllTime);
    if (this.state.swipedAllTime == 0 && !this.state.swipedAllCards) {
      return(
      <SwiperContainer
        modalVisible={this.state.modalVisible}
        onSwiped={this.onSwiped}
        title={this.state.titles}
        cards={this.state.cards}
        renderCard={this.renderCard}
        onSwipedAll={this.onSwipedAllCards}
      />
      )
    } else if (dif > 30000 && !this.state.swipedAllCards) {
      return (
        <SwiperContainer
          modalVisible={this.state.modalVisible}
          onSwiped={this.onSwiped}
          title={this.state.titles}
          cards={this.state.cards}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
        />
      )
    } else {
      return (
        <View style={Styles.emptyState}>
          <Image style={Styles.emptyStateImg}
            source={require('../../assets/img/emptyStateHome.png')}
          />
        </View>
      );
    }
  }

  renderCard = card => {
    return (
      <View style={Styles.externalCard}>
        <View style={Styles.card}>
          <Text style={Styles.word}>{card.word}</Text>
          <Text style={Styles.description}>{card.description}</Text>
          <Text style={Styles.example}>{card.example}</Text>
          <Text style={Styles.grammar}>{card.grammar}</Text>
        </View>
      </View>
    )
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
    const AllCardsTime = new Date();
    const swipedAllTime = AllCardsTime.getTime();
    AsyncStorage.setItem('swipedAllTime', swipedAllTime.toString());
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render() {
    const contenido = this.state.cards === null ?
      this.renderLoadingView() :
      this.renderCards();

    return (
      <View style={Styles.container}>
        <StatusBar
          backgroundColor="#0096A6"
          barStyle="light-content"
        />

        <View style={Styles.about}>
          <TouchableOpacity onPress={() => this.openModal()}>
            <Image style={Styles.aboutImg}
              source={require('../../assets/img/about.png')}
            />
          </TouchableOpacity>
        </View>
        {contenido}
        <View style={Styles.saved}>
          <TouchableOpacity onPress={() => Actions.saved()}>
            <Image style={Styles.savedImg}
              source={require('../../assets/img/savedCards.png')}
            />
          </TouchableOpacity>
        </View>
        <Modal
          transparent
          visible={this.state.modalVisible}
          animationType={'fade'}
          onRequestClose={() => this.closeModal()}
        >
          <View style={Styles.modalContainer}>
            <View style={Styles.innerContainer}>
              <Image style={Styles.logo}
                source={require('../../assets/img/logo.png')}
              />
              <Text style={Styles.modalFontTitle}>Learn new vocabulary everyday!</Text>
              <Text style={Styles.modalFont}>The idea is simple, you learn five word per day. That's it. </Text>
              <Text style={Styles.modalFont}>Swipe left the one you don't want to save. Swipe right the one you want to save for later (ala Tinder).</Text>
              <Text style={Styles.modalFontCredit}>Designed and Developed by</Text>
              <Text style={Styles.link} onPress={() => Linking.openURL('https://twitter.com/cartur28/')}>Carlos Navarro</Text>
              <Text style={Styles.link} onPress={() => Linking.openURL('https://github.com/cristiandavidippolito/')}>Cristian Ippolito</Text>
            </View>
            <View style={Styles.close}>
              <TouchableOpacity onPress={() => this.closeModal()}>
                <Image style={Styles.closeImg}
                  source={require('../../assets/img/close.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
