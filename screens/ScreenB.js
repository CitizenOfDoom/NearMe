import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const locListdata = [
  {key:1, name: "article 1" },
  {key:2, name: "article 2" },
  {key:3, name: "article 3" },
  //somehow saved as location objects idk
]

const Thing = ({item, onRun, onDelete}) => (
    <View>
      <Text>{item.name}</Text>
      <Button
        name={'show articles'}
        onPress={() => onRun(item.key)}              />
      <Button
        name={'Delete'}
        onPress={() => onDelete(item.key)}              />
    </View>
)

const ScreenB = () => (
  <View>
  <Button
    name={'Get current Location'}
    onPress={() => onloc()}  />
        <FlatList
          data={rListdata}
          renderItem={({ item }) =>
           <Thing
            item={item}
            onDelete={() => this.onDelete()}
            onRun={() => this.onRun()}
            />
          }
        />

      </View>
)
//for getcurrentlocation: show current adress and optional
//buttons to run or save it.
//at bottom of screen: userinput adress/reverse geocoding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
