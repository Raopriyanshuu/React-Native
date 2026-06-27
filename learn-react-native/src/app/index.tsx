import { Link } from "expo-router";
import { Button } from "expo-router/build/react-navigation";
import { View, Text, StyleSheet} from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello RaoSahab!!</Text>
      <Link href={"/about"}>Go to about</Link>
    </View>
  )
}

export default Index
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dadada",
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
  },

});
