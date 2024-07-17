import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },

  getItem: (key: string) => {
    const data = storage.getString(key);
    return Promise.resolve(data);
  },

  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;
