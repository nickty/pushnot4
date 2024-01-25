import {
  View,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import HomeHeader from '../components/HomeHeader';
import CategoryHomeItem from '../components/CategoryHomeItem';
import _ from 'lodash';

const offSetheight = getStatusBarHeight();

const Home = ({navigation}) => {
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
      <View style={styles.categoryView}>
        {!_.isEmpty() && (
          <FlatList
            data={_.get('categories', 'categories', [])}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.c_id.toString()}
            style={{paddingHorizontal: 10}}
            ListFooterComponent={
              <CategoryHomeItem
                name="All"
                onPress={() => {
                  navigation.navigate('SearchHealthcare', {
                    cat_id: '0',
                    category: null,
                    title: 'All Categories',
                  });
                }}
              />
            }
            renderItem={({item}) => (
              <CategoryHomeItem
                name={item.c_name}
                img_url={item.c_img}
                onPress={() => {
                  navigation.navigate('SearchHealthcare', {
                    cat_id: item.c_id,
                    category: null,
                    title: item.c_name,
                  });
                }}
              />
            )}
          />
        )}
      </View>
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
