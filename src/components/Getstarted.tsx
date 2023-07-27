import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen'


const Getstarted = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Text>app </Text>
    </View>
  );
};

export default Getstarted;

const styles = StyleSheet.create({});
