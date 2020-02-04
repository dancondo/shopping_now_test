import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
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
  justifyAround: {
    justifyContent: 'space-around'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
  banner: {
    height: '33%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stretchContainer: {
    alignSelf: 'stretch',
    flex: 1,
    backgroundColor: 'blue'
  },
  roundButton: {
    borderRadius: 28,
    height: 52,
  }
})