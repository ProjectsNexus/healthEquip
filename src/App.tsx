import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BootSplash from "react-native-bootsplash";
import NetInfo from "@react-native-community/netinfo";

//Navigation
import { DarkTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screen
import Home from './screen/home'
import Details from './screen/detial'
import Customizedappbar from './Component/Appbar'
import category from './screen/category'
import SearchScreen from './screen/search';
import { DefaultTheme, PaperProvider, RadioButton } from 'react-native-paper';

export type RootStackPramList = {
  Home: undefined
  Search: undefined
  Details: {equipment: Equipment}
  Category: {category: Category}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
  const [isConnected, setConnected] = useState<boolean>(true);
  
  const theme = DefaultTheme;

  useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			setConnected(state.isConnected);
			if (!state.isConnected) {
        showAlert()
			}
		});

		return () => {
			unsubscribe();
		};
	}, []);

  const showAlert = () => {
		Alert.alert(
			'Internet Connection',
			'You are offline. Some features may not be available.'
		);
	};

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      // console.log("BootSplash has been hidden successfully");
    });
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' 
        screenOptions={{
          header: (props) => <Customizedappbar {...props} />,
        }}>
          <Stack.Screen  name='Home' component={Home} theme={theme} />
          <Stack.Screen  name='Search' component={SearchScreen} header={false}/>
          <Stack.Screen  name='Category' component={category}/>
          <Stack.Screen  name='Details' component={Details}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;
