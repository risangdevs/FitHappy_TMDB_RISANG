import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import MovieService from "../services/movie-service";
import { RootTabScreenProps } from "../types";
import { useEffect, useState } from "react";
import { TV } from "../types/index";
import { Alert } from "react-native";
import { useList } from "../hooks/useList";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [currentPage, setPage] = useState<number>(1);
  const { tv, pagination, isLoading } = useList(currentPage);
  console.log(isLoading)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
