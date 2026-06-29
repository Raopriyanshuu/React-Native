import { View, Text } from "react-native";
import React from "react";
import Button from "../../components/button";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/login");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 600,
      }}
    >
      <Button title={"Continue"} onPress={onContinue} />
    </View>
  );
};

export default Index;
