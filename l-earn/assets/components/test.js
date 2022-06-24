import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import {v4} from "uuid"

let testArr = ["cake", "cheese", "bacon", "peas", "a", "car"]






const Test = ({ test, setTest }) => {

 function makeran() {
  console.log(React-router-dom.version)
   setTest(testArr[Math.floor(Math.random() * testArr.length)]);
    }
 return (
   <View key={v4()}>
     {testArr.map(() => {
       return (
         <>
           <TouchableOpacity
             key={v4()}
             style={{ width: 24, height: 24, backgroundColor: "#FFFAAA" }}
             onPress={() => makeran()}
           ></TouchableOpacity>
           <Text key={v4()}>Can you spell {test}</Text>
         </>
       );
     })}
   </View>
 );
}

export default Test

