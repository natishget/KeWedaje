import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const app = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      {/* <ImageBackground
      source={icedCoffeeImg}
      resizeMode="cover"
      style={styles.image}
      > */}
      {/* <Text style={styles.title}>Coffee Shop</Text>
      <Link href="/contact" style={{ marginHorizontal: "auto"}} asChild>
      <Pressable style={styles.button}>
      <Text style={styles.buttonText}> Contact</Text>
      </Pressable>
      </Link> */}
      {/* </ImageBackground> */}

      <Image
        style={styles.image}
        source={require("@/assets/images/login_image.png")}
      />
      <Text style={styles.header}>Login To Wedaje</Text>
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>
      <Link
        href="/register"
        style={{
          marginHorizontal: "auto",
          marginVertical: 10,
          color: "rgba(0, 120, 175, 1)",
        }}
      >
        Don't have An Account
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",

    backgroundColor: "white",
    padding: 20,
  },
  header: {
    alignSelf: "center",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 30,
  },
  image: {
    width: "70%",
    height: "40%",
    alignSelf: "center",
    marginBottom: 50,
  },
  title: {
    marginTop: 50,
    marginBottom: 100,
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  link: {
    width: "100%",
    marginTop: 50,
    color: "white",
    fontWeight: "bold",
    fontSize: 42,
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  button: {
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "rgba(0, 120, 175, 1)",
    paddingVertical: 8,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    padding: 4,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default app;
