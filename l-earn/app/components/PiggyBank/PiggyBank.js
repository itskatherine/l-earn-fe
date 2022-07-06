import React from "react";
import { Text, Image, View, Animated, Stylesheet, Easing } from "react-native";
import formatMoney from "../../utils/formatMoney";
import styles from "./styles";
import { getUserFromId } from "../../utils/api";
import { useState, useEffect } from "react";
import ImageSwapper from "../../utils/imageswap";


const pigs = {pig:require("../../assets/piggybank.png"),goldpig:require("../../assets/piggybankgold.png")}

function PiggyBank({ amountEarned, correct }) {

  useEffect(() => {
    if (correct === "correct") {
      setCurrentImage(pigs.goldpig);
    }
    setTimeout(
      () => {
        setCurrentImage(pigs.pig);
      },
      10000,
      
    );
     


  }, [correct])



  const [currentImage, setCurrentImage] = useState(
    pigs.pig
  );
  const [pigscale, setPigscale] = useState(new Animated.Value(0));


  const [pocketMoney, setPocketMoney] = useState();
  const getPocketMoney = getUserFromId(1).then((res, pigpic) => {
    setPocketMoney(res.weekly_pocket_money);
  });

  const pigScaleInterpolate = pigscale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const pigTransform = {
    transform: [{ scale: pigScaleInterpolate }]
  };

  useEffect(() => {
    Animated.timing(pigscale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start(() => {
      setTimeout(() => {}, 500);
    });
  }, []);



    return (
      <Animated.View style={[styles.piggyBankIcon, pigTransform]}>
        <Image
          style={styles.piggy}
          source={currentImage}
        ></Image>
        <Text style={styles.text}>
          {formatMoney(amountEarned)} / {formatMoney(pocketMoney)}
        </Text>
      </Animated.View>
    );
  }


export default PiggyBank;
