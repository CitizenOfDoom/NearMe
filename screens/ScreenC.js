import React from 'react';
import { Text, View, Button, StyleSheet, FlatList, Item, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const rArtdata = [
  {key:1, name: "article 1" },
  {key:2, name: "article 2" },
  {key:3, name: "article 3" },
  //once I figure out how to get the articles
]

const Thing = ({item, onDelete}) => (
    <View>
      <Text>{item.name}</Text>
      <Button
        name={item.name}
        onPress={() => onDelete(item.key)}              />
    </View>
)

const ScreenC = () => (
  <View>
        <FlatList
          data={rListdata}
          renderItem={({ item }) =>
           <Thing
            item={item}
            onDelete={() => this.onDelete()}
            />
          }
        />

      </View>
)
//ADD flatlist view

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
