import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import LottieView from 'lottie-react-native';

import {COLORS} from '../theme/theme';

interface PopUpAnimation {
  style: any;
  source: any;
}

const PopUpAnimation: FC<PopUpAnimation> = ({style, source}) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <LottieView style={style} source={source} autoPlay loop={false} />
    </View>
  );
};

export default PopUpAnimation;

const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
});
