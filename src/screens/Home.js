import {View, Text, Platform, StatusBar, StyleSheet} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import HomeHeader from '../components/HomeHeader';

const offSetheight = getStatusBarHeight();

const Home = () => {
  return (
    <Wrapper style={styles.wrapperStyle}>
      {Platform.OS === 'andnroid' && (
        <StatusBar
          translucent
          backgroundColor="black"
          barStyle="dark-content"
        />
      )}
      <View
        style={{
          height: offSetheight,
          backgroundColor: '#999',
          top: 0,
          zIndex: 99999,
          left: 0,
        }}></View>
      <HomeHeader />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    paddingHorizontal: 0,
    backgroundColor: '#fafafa',
  },
});

export default Home;
