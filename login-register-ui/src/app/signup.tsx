import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Button from "../../components/button";

const SignUp = () => {
  const router = useRouter();

  const onRegister = () => {
    router.navigate("/login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New User</Text>
      <TextInput style={styles.input} placeholder="full name" />
      <TextInput style={styles.input} placeholder="enter your email" />
      <TextInput style={styles.input} placeholder="enter your password" />
      <TextInput style={styles.input} placeholder="Re-enter your password" />

      <Button title={"sign up"} onPress={onRegister} />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#fff",
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
