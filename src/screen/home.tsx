import { FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions, Image, ScrollView } from 'react-native'
import React from 'react'

//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"

import ProductItem from '../Component/Home/colEquipCard'

// data
import { Equipmnet_list, Category_list } from '../constants/contants'
import { Card, Searchbar, shadow } from 'react-native-paper'
import { useTheme } from '@react-navigation/native'

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">
const Home = ({navigation,}: HomeProps) => {
  const window = useWindowDimensions()
  const searchQuery = '';
  const theme = useTheme();
  return (
    // <ScrollView accessibilityElementsHidden>
      <View style={styles.container}>
        <View style={{width: window.width - 25, marginVertical: 11, gap: 7}}>
          <Text style={{fontSize: 21, fontWeight: '800', color: theme.colors.text}} > Navigating Medical Equipment Searches: </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: theme.colors.text}}> Quickly locate the right medical tools with pinpoint accuracy! </Text>
          <Searchbar placeholder="Search..." value={searchQuery} onFocus={() => {navigation.navigate('Search')}} elevation={4}/>
        </View>
        
        <FlatList
          data={Category_list}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => (
            <Pressable
            onPress={() => {
              navigation.navigate('Category', {
                category: item
              })
            }}
            >
              <Card style={{marginEnd: 11}} elevation={2}>
                <Card.Title title={item.name} titleVariant= "titleMedium" /> 
              </Card>
            </Pressable>
          )}
        /> 

        <FlatList
        data={Equipmnet_list}
        keyExtractor={item => item.id}
        numColumns={1}
        initialNumToRender={15}
        renderItem={({item}) => (
          <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              equipment: item
            })
          }}
          >
            <ProductItem equipment={item}/>
          </Pressable>
        )}
        />
      </View>
    // </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home