import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { DEVICE_W_percent } from '../../config/variables';

const ROURTER = [
  { routeName: 'MEN', title: 'MEN', },
  { routeName: 'WOMEN', title: 'WOMEN', },
  { routeName: 'KIDS', title: 'KIDS', },
  { routeName: 'LIFESTYLE', title: 'LIFESTYLE', }
];

export default Block_Category = (props) => {
  return (
    <View style={styles.container}>
      {[2, 4].map((line) =>
        <View style={styles.tag} key={line}>
          {[2, 1].map((index) => {
            const router = (line.valueOf() - index.valueOf())
            return (
              <TouchableOpacity key={index}
                activeOpacity={0.8}
                style={styles.buttonsBlock} >
                <Text style={styles.buttonText} >{ROURTER[router].title}</Text>
              </TouchableOpacity>
            )
          }
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2%',
    marginBottom: 15,
    paddingBottom: 30,
  },
  tag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsBlock: {
    backgroundColor: "rgba(0,0,0, 0.8)",
    borderRadius: 5,
    flex: DEVICE_W_percent(44),
    height: DEVICE_W_percent(44),
    margin: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: "center"
  },
});
