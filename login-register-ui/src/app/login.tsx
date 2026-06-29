import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/button";

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.navigate("/signup");
  };

  return (
    <View style={styles.container}>
      <Image style={{height: 300, width: 300, marginLeft: 30}} source={require("@/assets/images/background.jpg")} resizeMode="cover" />
      <Text style={styles.title}>Welcome Back</Text>

      <TextInput style={styles.input} placeholder="enter your email" />
      <TextInput style={styles.input} placeholder="enter your password" />

      <Button title={"login"} onPress={onLogin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#dadada",
    gap: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
});
