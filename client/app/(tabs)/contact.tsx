import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Contact Us</Text>
      <Text style={styles.Text2}>
        Feel Free to contact us and we will get back to you as soon as possible!
      </Text>
      <Text style={styles.Text2}>Email: example@gmail.com</Text>
      <Text style={styles.Text2}>Phone: +251987654321</Text>
      <Text style={styles.Text2}>
        Location: Abrus Building infront of Dumbel city Center Addis Ababa,
        Ethiopia
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Text: {
    marginTop: 100,
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
  },
  Text2: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default explore;
