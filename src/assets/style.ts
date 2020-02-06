import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 7,
    flex: 1
  },
  marginVerticalMd: {
    marginVertical: 7
  },
  marginHorizontalMd: {
    marginHorizontal: 7
  },
  alignAround: {
    alignContent: 'space-around'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyAround: {
    justifyContent: 'space-around'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  banner: {
    minHeight: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1,
  },
  roundButton: {
    borderRadius: 28,
    height: 52,
  },
  underline: {
    textDecorationLine: 'underline'
  }
})