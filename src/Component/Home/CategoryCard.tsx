import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { Card } from 'react-native-paper'

type CategoryProps = PropsWithChildren<{
    Category: Category
}>
const CategoryCard = ({Category}: CategoryProps) => {
    const window = useWindowDimensions();
  return (
    <>
         <View style={[{width: window.width / 3, height: 300}, styles.CategoryCard]}>
            <Image source={{uri: Category.image_url}} width={window.width / 3 } height={100} style={styles.CategoryImage} />
              <Text style={styles.CategoryText}> {Category.name} </Text> 
              <Text style={styles.CategoryDesc} > {Category.attractive_line} </Text> 
          </View>
    </>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    
  CategoryCard: {
    marginHorizontal: 11,
    marginVertical: 14,
    backgroundColor: "#e8e8e8", 
    borderRadius: 11
  },
  CategoryText: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 3,
    paddingHorizontal: 5 
  },
  CategoryImage: {
    borderRadius: 11,
    marginBottom: 7
  },
  CategoryDesc: {
    textAlign: 'center',
    paddingHorizontal: 5 
  }
})