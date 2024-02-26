import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Divider, Text } from '@nx-monorepo-rn-boilerplate/ui-components';

export const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello from mobile2</Text>
        <Divider top={10} botton={10} color="green" />
        <Text type="base">Title</Text>
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
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;
