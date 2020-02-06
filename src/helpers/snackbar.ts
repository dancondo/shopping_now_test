import Snackbar from 'react-native-snackbar';

export const snackbarAsyncWrapper = async (fn: Function, successMessage?: string) => {
  try {
    await fn();
    if(successMessage) {
      Snackbar.show({
        text: successMessage
      })
    }
  } catch (err) {
    Snackbar.show({
      text: err.message
    })  
  }
}