import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Divider, Text } from '@nx-monorepo-rn-boilerplate/ui-components';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello from mobile 1</Text>
        <Divider top={10} botton={10} color="blue" />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
