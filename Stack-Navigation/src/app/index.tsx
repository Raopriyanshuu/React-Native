import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Guys</Text>
      <Link style={styles.link} href={"/about"}>
        Go to about
      </Link>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },

  link: {
    fontWeight: "700",
  },
});
