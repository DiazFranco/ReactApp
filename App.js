import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { StyleSheet, Text, View, FlatList} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={[
        {key: '1', name: 'Franco'},
        {key: '2', name: 'Franco'},
        {key: '3', name: 'Franco'},
        {key: '4', name: 'Franco'},
        {key: '5', name: 'Franco'},
        {key: '6', name: 'Franco'},
        {key: '7', name: 'Franco'},
        {key: '8', name: 'Franco'},
        {key: '9', name: 'Franco'},
        {key: '10', name: 'Franco'},
        {key: '12', name: 'Franco'},
        {key: '13', name: 'Franco'},
        {key: '14', name: 'Franco'},
        {key: '15', name: 'Franco'},
        {key: '16', name: 'Franco'},
        {key: '17', name: 'Franco'},
        {key: '18', name: 'Franco'}

        
      ]}
    renderItem={({item}) => <Text style = {styles.item}>{item.name}</Text> }
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding : 10,
    fontSize: 22,
    height: 50,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingTop: 22
  },
});
