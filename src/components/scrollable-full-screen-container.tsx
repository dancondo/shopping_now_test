import React, { ReactChild } from "react"
import { ThemeProvider } from "react-native-elements"
import { ScrollView, View, Dimensions, Platform, StatusBar } from "react-native"
import { styles } from "../assets/style"
import { useHeaderHeight } from "react-navigation-stack"

export type ScrollableFullScreenContainerProps = {
  children: ReactChild[] | ReactChild;
  hasHeader?: boolean;
}

export const ScrollableFullScreenContainer = (props) => {

  const getHeight = () => {
    let windowHeight = Dimensions.get('window').height;
    if (props.hasHeader) windowHeight -= useHeaderHeight();
    return Platform.OS === 'android' ? windowHeight - StatusBar.currentHeight : windowHeight;
  }



  return (
    <ThemeProvider>
      <ScrollView>
        <View
          style={{ ...styles.container, height: getHeight() }}
        >
          { props.children }
        </View>
      </ScrollView>
    </ThemeProvider>
  )

}