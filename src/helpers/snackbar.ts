import Snackbar from 'react-native-snackbar';

export const snackbarAsyncWrapper = async (fn: Function) => {
  try {
    await fn();
  } catch (err) {
    Snackbar.show({
      text: err.message
    })  
  }
}