import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import SearchBar from '../Component/Search/searchBar';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackPramList } from '../App';

type SearchProps = NativeStackScreenProps<RootStackPramList, "Home">

const SearchScreen = ({navigation, route}: SearchProps) => {
  const window = useWindowDimensions();
  return (
    <>
      <SearchBar navigation={navigation} route={route} />
    </>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})