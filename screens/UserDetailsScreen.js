import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

const UserDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  }
});

UserDetailsScreen.navigationOptions = {
  header: 'マイページ'
};

export default UserDetailsScreen;
