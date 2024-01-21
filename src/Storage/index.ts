import {StorageKey} from '@FocusWorld/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('failed to set');
  }
};

const get = async (key: StorageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('failed to get');
  }
};

export const StorageUtils = {
  store,
  get,
};
