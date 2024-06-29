import { Image, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { useTheme } from 'react-native-paper'


type ProductProps = PropsWithChildren<{
    equipment: Equipment
}>

const ProductItem = ({equipment}: ProductProps) => {
  
  return (
    <View style={[styles.container]} >
        <View style={styles.imageConatiner}>
            <Image source={{uri: equipment.images_url.at(0)}} style={styles.image} />
        </View>

      <View>
        <Text style={styles.name}>{equipment.name}</Text>
        <View style={[styles.rowContainer, styles.ratingContainer]}>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>
                  {equipment.size_cm.height} cm X {equipment.size_cm.length} cm X {equipment.size_cm.width} cm 
                </Text>
            </View>
            <Text style={styles.AddnationInfo}>
                ({equipment.weight.value} {equipment.weight.unit})
            </Text>
            </View>
            
            <View style={[styles.rowContainer, styles.InventionContainer]}>
                <Text style={styles.InventorDetail}>
                    Invent by<Text style={{fontWeight: 'bold', fontSize: 19}}> {equipment.inventor_name} </Text>at<Text style={{fontWeight: 'bold', fontSize: 19}}> {equipment.date_of_invention} </Text>
                </Text>
            </View>
            <View style={[styles.rowContainer]}>
              { 
                equipment.categories.map((item) => (
                  <Text style={styles.CategoryText}> {item} </Text>
                ))
              }
            </View>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: '96%',
        marginVertical: 8,
        paddingVertical: 4,
        borderRadius: 14,
        marginHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dee3e0',
        elevation: 4
    },
    rowContainer: {
      flexDirection: 'row',
    },
    imageConatiner: {
        position: 'relative',
        borderRadius: 15,
        marginHorizontal: 12,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 15,
      resizeMode: 'contain',
      elevation: 3
    },
    name: {
      marginBottom: 4,
      fontSize: 21,
      fontWeight: '900',
      maxWidth: 200,
      color: "#000000"
    },
    ratingContainer: {
      marginBottom: 8,
    },
    InventionContainer: {
      marginBottom: 12,
    },
    rating: {
      borderRadius: 4,
      paddingHorizontal: 8,
      justifyContent: 'center',
      backgroundColor: '#008c00',
      marginRight: 4,
    },
    ratingText: {
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
    CategoryText: {
      fontSize: 13,
      fontWeight: "400"
    }
  });

export default ProductItem