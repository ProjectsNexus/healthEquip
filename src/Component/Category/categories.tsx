import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { PropsWithChildren} from 'react'
import { Card, Icon, useTheme } from 'react-native-paper'



type CategoryProps = PropsWithChildren<{
  Category: Equipment
}>

const Categories = ({Category}: CategoryProps) => {
    const window = useWindowDimensions();
    
  return (
      <Card style={[{width: window.width - 40, }, styles.card]}>
        {/* <Pressable style={styles.favrateIcon}>
          <Icon source={'heart-outline'} size={24} color='red' />
        </Pressable> */}
        <Card.Cover style={{elevation: 5}} source={{uri: Category.images_url.at(0)}} width={window.width /2}/>
        
        <Card.Title title= {Category.name} titleNumberOfLines={2} titleVariant='headlineSmall' style={{marginTop: 8}} />
        <Card.Content index={Category.id}>
            <View style={[styles.rowContainer, styles.sizeContainer]}>
                <View style={styles.size}>
                    <Text style={styles.sizeText}>
                    {Category.size_cm.height} cm X {Category.size_cm.length} cm X {Category.size_cm.width} cm 
                    </Text>
                </View>
                <Text style={styles.AddnationInfo}>
                    ({Category.weight.value} {Category.weight.unit})
                </Text>
            </View>
            <View style={[styles.rowContainer, styles.InventionContainer]}>
                <Text style={styles.InventorDetail}>
                    Invent by<Text style={{fontWeight: 'bold', fontSize: 19}}> {Category.inventor_name} </Text>at<Text style={{fontWeight: 'bold', fontSize: 19}}> {Category.date_of_invention} </Text>
                </Text>
            </View>
            <View style={[styles.rowContainer]}>
                {
                  Category.categories.map((item) => (
                    <Text> {item} </Text>
                  ))
                }
            </View>
        </Card.Content>
      </Card>
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
  
export default Categories