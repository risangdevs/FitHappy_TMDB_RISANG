import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
interface DetailProps {
  route: any;
  navigation: any;
}
export default function ModalScreen({ navigation, route }: DetailProps) {
  const { name, desc } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.descriptionOverview}>{desc}</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#8B7E74",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  descriptionOverview: {
    color: "#8B7E74",
    marginHorizontal: 14,
    fontSize: 16,
  },
});
