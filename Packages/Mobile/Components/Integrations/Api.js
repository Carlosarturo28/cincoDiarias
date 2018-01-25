const URL = 'https://7c5e7006.ngrok.io/';

export default class Api {

  static consultarCards(user) {
    return fetch(`${URL}cards/${user}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => error);
  }

  static consultarSavedCards(user) {
    console.log(user);
    return fetch(`${URL}getSavedCards/${user}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => error);
  }

  static asociarCards(userId, cardId, saved) {
    const data = {
        userId,
        cardId,
        saved
    };
    return fetch(`${URL}asociar`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => error);
  }

  static createUser(user) {
    const data = {
        user
    };
    return fetch(`${URL}createUser`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch(error => error);
  }


}