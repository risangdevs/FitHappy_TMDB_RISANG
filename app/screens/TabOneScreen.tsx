import { StyleSheet } from "react-native";

import { useState } from "react";
import List from "../components/List";
import { SearchBar } from "../components/SearchBar";
import { View } from "../components/Themed";
import { useList } from "../hooks/useList";
import { RootTabScreenProps } from "../types";
import { TV } from "../types/index";
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [currentPage, setPage] = useState<number>(1);
  const { tv, pagination, isLoading } = useList(currentPage);
  return (
    <View style={styles.container}>
      <SearchBar />
      <List
        tv={tv as TV[]}
        page={currentPage}
        isLoading={isLoading}
        setPage={setPage}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
