# Smooth-Image
Enhance the image loading in React Native => 59.0 Applications

Very lightweight library for -
Add loading animation while image is loading full customizable 

#Installation 

    npm i smoothimage

#Usage

    import React from 'react';
    import { View } from 'react-native';
    import SmoothImage from 'smoothimage'

    const componentName = (params) => (
        <View>
              <SmoothImage
                source={require('./../../assets/Images/test.jpg')}
                style={{height: 200, width: 200}}
                loaderColor="blue"
                loaderBackgroundStyle={{backgroundColor: 'gray'}}
              />
        </View>
    );

    export default componentName;


#PROPS 

      style - style object
      loaderColor  - String (Color code or name)
      loaderBackgroundStyle - Style Object (Customize the UI)
