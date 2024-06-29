import { Appbar, DefaultTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { DarkTheme } from '@react-navigation/native';
import { useState } from 'react';
import { theme } from '../constants/theme';

export default function CustomNavigationBar({ navigation, route, options, back }):React.JSX.Element {
  let title = getHeaderTitle(options, route.name);

  
  return (
    <Appbar.Header style={{backgroundColor: theme.colors.background, elevation: 2}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={(title == "Home") ?  ("HealthEquip") : title} />
      {/* <Appbar.Action icon={'heart'} iconColor='red' onPress={() => {navigation.navigate('Favourite')}} /> */}
    </Appbar.Header>
  );
}