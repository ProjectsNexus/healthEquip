import * as React from 'react';
import { FlatList, Pressable, StyleSheet, View, useWindowDimensions, Image } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { Equipmnet_list } from '../../constants/contants'
import { useState } from 'react';
import ProductItem from './rowEquipCard';


//React navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../../App"

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">
const SearchBar = ({navigation}: HomeProps) => {
  const window = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Equipment[]>([]);

  const onSearch = (quary: React.SetStateAction<string>) => {
    setSearchQuery(quary)
    const formattedQuery = searchQuery.toString().toLowerCase();
    const filteredItem = Equipmnet_list.filter((item: { name: string; }) => {
      return item.name.toLowerCase().includes(formattedQuery);
    })
    
    setFilteredData(filteredItem)
  };
  
  return (
    <>
      <View style={{width: window.width - 25, marginVertical: 11}}>
        <Searchbar placeholder="Search" onChangeText={onSearch} value={searchQuery} elevation={1} />
      </View>
      {(searchQuery.length > 0) ? 
        (
          <View>
           { (filteredData.length > 1) ? 
            (
              <>
                <FlatList
                  data={filteredData}
                  keyExtractor={item => item.id}
                  numColumns={1}
                  renderItem={({item}) => (
                    <Pressable
                    onPress={() => {
                      setSearchQuery(item.name)
                      navigation.navigate('Details', {
                        equipment: item
                      })
                    }}
                    >
                      <ProductItem equipment={item}/>
                    </Pressable>
                  )}
                />
                <View style={Style.searchResultEnd}>
                  <Text style={Style.searchResultText}> No More Result Found </Text>
                </View>
              </>
          ) : (
              <View style={Style.SearchResult}>
                <Text style={Style.searchResultText}> Type Something Different </Text>
              </View>
            )
            }
          </View>
      )
        : (
          <View style={Style.SearchResult}>
            <Text style={Style.searchResultText}> Nothing Found </Text>
          </View>
        )
      }
      
    </>
  );
};

export default SearchBar;

const Style = StyleSheet.create({
  Suggestnation: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    backgroundColor: "#d9d9d9",
    borderRadius: 11,
    marginVertical: 3,
  },
  SuggestnationImage: {
    width: 10,
    height: 10,
    borderRadius: 250
  },
  searchResultEnd: {
    marginTop: 11,
    justifyContent: 'center',
    alignItems: 'center'
  },
  SearchResult: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchResultText: {
    fontSize: 17,
    fontWeight: 'bold',
  }
})
