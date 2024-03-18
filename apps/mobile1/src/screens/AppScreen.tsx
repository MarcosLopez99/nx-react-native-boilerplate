import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Text } from '@nx-monorepo-rn-boilerplate/ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@nx-monorepo-rn-boilerplate/models';
import { appActions, peopleActions } from '@nx-monorepo-rn-boilerplate/store';

const AppScreen = () => {
  const { loading } = useSelector((state: RootState) => state.app);
  const { people } = useSelector((state: RootState) => state.people);
  const dispatch = useDispatch();

  const setLoading = (value: boolean) => {
    value
      ? dispatch({ type: appActions.onLoadApp })
      : dispatch({ type: appActions.onLoadAppEnd });
  };


  useEffect(() => {
    setLoading(true);
    dispatch(peopleActions.fetchPeople() as any);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    console.log('people', people[0]);
  }, [people]);

  return loading ? (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text>App Screen mobile 1</Text>
      <Text>{people[0]?.email}</Text>
      <Button title="Set Loading" onPress={() => setLoading(true)} />
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
