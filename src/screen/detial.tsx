import { ScrollView, StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native'
import React from 'react'

// react navigation
import {NativeStackScreenProps} from "@react-navigation/native-stack"
import {RootStackPramList} from "../App"
import { Card, DataTable, Divider, Icon } from 'react-native-paper'



type DetailsProps = NativeStackScreenProps<RootStackPramList, "Details">

const Details = ({route}: DetailsProps) => {
  const {equipment} = route.params
  return (
    <ScrollView>
      <Card>
        <Card.Cover source={{uri: equipment.images_url.at(0)}} />
        <Divider horizontalInset />
        <View style={styles.contextContainer}>
            <View style={styles.majorText}>
              <View>
                <Card.Title title={equipment.name} titleVariant='headlineMedium' />
                <View style={styles.extraText}>
                    <View style={styles.category}>
                        {equipment.categories.map((item) => (
                          <Text> {item} </Text>
                        ))}
                    </View>
                </View>
              </View>
              {/* <View>
                <Icon source={'heart-outline'} size={24} color='red' />
              </View> */}
            </View>
            <Card.Content index={equipment.id} style={{paddingVertical: 17}}>
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Cell> Avg. Price </DataTable.Cell>
                    <DataTable.Cell> {equipment.avg_price}</DataTable.Cell>
                  </DataTable.Row>
                  <Divider />
                  <DataTable.Row> 
                    <DataTable.Cell> Size (in cm) </DataTable.Cell>
                    <DataTable.Cell> {equipment.size_cm.height} cm X {equipment.size_cm.length} cm X {equipment.size_cm.width} cm</DataTable.Cell>
                  </DataTable.Row>
                  <Divider />
                  <DataTable.Row>
                    <DataTable.Cell> Weight </DataTable.Cell>
                    <DataTable.Cell> {equipment.weight.value} {equipment.weight.unit}</DataTable.Cell>
                  </DataTable.Row>
                  <Divider />
                </DataTable>
                <View style={{paddingTop: 11}}>
                  <Text style={styles.titleText}>Invent</Text>
                  <Text style={styles.bodyText}> {equipment.name} is Invent by {equipment.inventor_name} at {equipment.date_of_invention} </Text>
                  <Divider />
                  <Text style={styles.titleText}>Introduction</Text>
                  <Text style={styles.bodyText}> {equipment.description.introduction} {equipment.description.portability} </Text>
                  <Divider />
                  <Text style={styles.titleText}>Functionality</Text>
                  <Text style={styles.bodyText}> {equipment.description.functionality}  </Text>
                  <Divider />
                  <Text style={styles.titleText}>Benefit</Text>
                  <Text style={styles.bodyText}> {equipment.benefit} </Text>
                  <Divider />
                  <Text style={styles.titleText}>Uses</Text>
                  {equipment.uses.map((item, index) => (<Text style={styles.bodyText}><Text style={{fontWeight: 'bold'}}>{index+1}.</Text> {item} </Text>))}
                  <Divider />
                  <Text style={styles.titleText}>Purposes</Text>
                  {equipment.purposes.map((item, index) => (<Text style={styles.bodyText}><Text style={{fontWeight: 'bold'}}>{index+1}.</Text> {item} </Text>))}
                </View>
            </Card.Content>
        </View>
      </Card>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  contextContainer: {
    backgroundColor: '#dce0de',
    borderRadius: 21,
    marginTop: -7,
    shadowColor: '#0f0f0f',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 12,
      height: 70
    }
  },
  majorText: {
    paddingVertical: 7,
    paddingEnd: 21,
    backgroundColor: '#edf0ee',
    borderRadius: 21,
    shadowColor: '#000000',
    shadowOffset: {
      height: 11,
      width: 21
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  extraText: {
    paddingHorizontal: 21
  },
  category:{
    flex: 1,
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 21,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    color: '#121212'
  },
  bodyText: {
    fontSize: 17,
    fontWeight: '400',
    marginBottom: 11,
    color: '#232423',
    textAlign: 'justify'
  }
});


export default Details