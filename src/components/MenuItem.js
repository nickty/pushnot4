import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

const MenuItem = props => {
  const {
    routeName,
    url,
    heading,
    desc,
    navigation,
    user,
    unread,
    extraTagImage,
    hotline,
  } = props;
  return (
    <TouchableOpacity style={styles.containerStyle}>
      <View style={styles.menuImageView}>
        {typeof url === 'string' ? (
          <Ionicons name={url} size={32} color="#10837d" />
        ) : (
          <FastImage source={url} style={styles.menuImage} />
        )}
      </View>
      <View style={styles.menuTextView}>
        <View style={styles.menuTitleView}>
          <Text style={styles.textStyle}>{heading}</Text>
          {extraTagImage && (
            <FastImage source={extraTagImage} style={styles.extraTagImage} />
          )}
        </View>
        <Text style={styles.descriptionText} numberOfLines={2}>
          {desc}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 18,
    alignContent: 'center',
  },
  menuTextView: {
    marginLeft: 17,
    paddingRight: 30,
  },
  menuTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 14,
    color: '#4f585e',
    fontWeight: '600',
  },
  descriptionText: {
    color: '#8897a2',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'left',
  },
  extraTagImage: {
    width: 60,
    height: 16,
    marginHorizontal: 5,
  },
  menuImageView: {
    width: 32,
    alignItems: 'center',
  },
});
