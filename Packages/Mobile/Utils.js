import { AsyncStorage } from 'react-native';

async function obtenerUserId() {
    let user;
    try {
      user = await AsyncStorage.getItem('user');
    } catch (error) {
      throw error;
    }
    return user;
}

module.exports = {
    obtenerUserId
}