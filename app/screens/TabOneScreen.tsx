import {
  StyleSheet,
  Touchable,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useState } from "react";
import List from "../components/List";
import { Text, View } from "../components/Themed";
import { useList } from "../hooks/useList";
import { RootTabScreenProps } from "../types";
import { pagination, TV } from "../types/index";
import { Dimensions } from "react-native";
import { Pagination } from "../components/Pagination";
import { FontAwesome } from "@expo/vector-icons";
import { SearchBar } from "../components/SearchBar";
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
        page={pagination as pagination}
        isLoading={isLoading}
      />
      <Pagination
        currentPage={currentPage}
        setPage={setPage}
        isLoading={isLoading}
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
