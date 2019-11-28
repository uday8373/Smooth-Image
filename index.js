import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Animated } from 'react-native';

export default (props) =>  {
  const [loading, setLoading] = useState(false)
  const [fadeAnim] = useState(new Animated.Value(0))
  const {source, style, loaderColor, loaderBackgroundStyle} = props

  const onLoadStart = () => {
   setLoading(true) 
  }
  const onLoadEnd = () => {
      setLoading(false)
      Animated.timing(fadeAnim,{toValue: 1,duration: 1000}).start();
  }
    return (
      <>
      {loading &&
        <View style={[style, styles.loader, loaderBackgroundStyle]}>
          <ActivityIndicator size="large" color={loaderColor ? loaderColor : 'gray'}/>
      </View> }
       <Animated.Image
          source={source} 
          style={[style, loading ? {display:'none'} : {}, {opacity: fadeAnim}]}
          onLoadStart = {onLoadStart}
          onLoadEnd={onLoadEnd}
        /> 
      </>
    )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  loader: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
});