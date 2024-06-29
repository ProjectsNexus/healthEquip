import { View, Text, ScrollView, StyleSheet, Pressable, useWindowDimensions, FlatList } from 'react-native'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Equipmnet_list } from '../constants/contants'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPramList } from '../App'
import Categories from '../Component/Category/categories'
import { Searchbar, useTheme } from 'react-native-paper'

type CategoryProps = NativeStackScreenProps<RootStackPramList, "Category">

const Category = ({navigation, route}: CategoryProps) => {
  const window = useWindowDimensions()
  const CategoryRoute = route.params
  const searchQuery = '';
  const theme = useTheme();
  const [result, setResult] = useState<Equipment[]>([])
  
  useEffect(() => {
    const getCategoryItem = () => {
      const CategoryName = CategoryRoute.category.name.toLowerCase();
      const CategoryItem = Equipmnet_list.filter((item: { categories: string[]; }) => {
        return item.categories.toLocaleString().toLowerCase().includes(CategoryName);
      })
      setResult(CategoryItem);
      
    }

    if(result.length < 1){
      getCategoryItem();
    }

  }, [result])
  return (
    <>
      <View style={{width: window.width - 25, marginVertical: 11}}>
        <Searchbar placeholder="Search..." value={searchQuery} onFocus={() => {navigation.navigate('Search')}} elevation={4}/>
      </View>
      
      <FlatList
        data={result}
        keyExtractor={item => item.id}
        numColumns={1}
        renderItem={({item}) => (
          <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              equipment: item
            })
          }}
          >
            <Categories Category={item}/>
          </Pressable>
        )}
        />
    </>
  )
}


const styles = StyleSheet.create({
  card: {
      marginHorizontal: 11,
      marginVertical: 14,
      position: 'relative' 
  },
  favrateIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 14,
    zIndex: 5
  },
  rowContainer: {
    flexDirection: 'row',
  },
  imageConatiner: {
      position: 'relative'
  },
  image: {
    width: 100,
    height: 150,
    resizeMode: 'contain',

    marginRight: 12,
  },
  name: {
    marginBottom: 4,
    fontSize: 21,
    fontWeight: '900',
    maxWidth: 200
  },
  sizeContainer: {
    marginBottom: 8,
  },
  InventionContainer: {
    marginBottom: 12,
  },
  size: {
    borderRadius: 4,
    paddingHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: '#008c00',

    marginRight: 4,
  },
  sizeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  AddnationInfo: {
    color: '#878787',
  },
  InventorDetail: {
    fontSize: 18,
    marginRight: 4,
    color: 'rgba(0, 0, 0, 0.5)',
    maxWidth: 250
  },
  category: {}
});
  
export default Category