import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = 'USER_TOKEN';

export const storeToken = async token => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (e) {
    // saving error
  }
};

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (e) {
    // remove error
  }
};
