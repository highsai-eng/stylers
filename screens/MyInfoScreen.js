import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const MyInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        うぇいうぇい
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default MyInfoScreen;
