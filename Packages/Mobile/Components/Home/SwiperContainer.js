import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import Swiper from 'react-native-deck-swiper';
import Utils from '../../Utils';
import Api from '../Integrations/Api';

export default class SwiperContainer extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.modalVisible === this.props.modalVisible
  }

  sendCardInfo = (cardIndex, saved) => {
    const cardId = this.props.cards[cardIndex]._id;
    Utils.obtenerUserId()
    .then(user => {
      Api.asociarCards(user, cardId, saved);
    })
    .catch(err =>{
      throw err;
    })

  }

  render() {
    return (
      <Swiper
        onSwipedRight= { cardIndex => {
          this.sendCardInfo(cardIndex, true);
        }}
        onSwipedLeft= { cardIndex => {
          this.sendCardInfo(cardIndex, false);
        }}
        ref={swiper => {
          this.swiper = swiper
        }}
        onSwiped={this.props.onSwiped}
        backgroundColor='#44C9E2'
        disableTopSwipe={true}
        disableBottomSwipe={true}
        titles={this.props.titles}
        cards={this.props.cards}
        cardHorizontalMargin={0}
        cardVerticalMargin={80}
        renderCard={this.props.renderCard}
        onSwipedAll={this.props.onSwipedAll}
        overlayLabels={{
          left: {
            element:
              <Image style={{ width: '25%', height: '20%' }}
                source={require('../../assets/img/discard.png')}
              />,
            style: {
              label: {
                textAlign: 'center',
                backgroundColor: '#DB6666',
                color: 'white',
                borderColor: '#DB6666',
                borderRadius: 40,
                width: 40,
                height: 40,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
              }
            }
          },
          right: {
            element: <Image style={{ width: '25%', height: '20%' }}
              source={require('../../assets/img/save.png')}
            />,
            style: {
              label: {
                textAlign: 'center',
                backgroundColor: '#93D07C',
                color: 'white',
                borderColor: '#93D07C',
                borderRadius: 40,
                width: 80,
                height: 80
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginLeft: -2,
                marginTop: -2,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4
              }
            }
          }
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
      >
      </Swiper>
    )
  }
}

SwiperContainer.propTypes = {
  onSwiped: PropTypes.func,
  renderCard: PropTypes.func.isRequired,
  onSwipedAll: PropTypes.func,
  titles: PropTypes.string,
}