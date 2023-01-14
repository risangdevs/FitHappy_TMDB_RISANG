import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View } from "./Themed";

export const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Movies..."
      ></TextInput>
      <TouchableOpacity style={styles.searchButton}>
        <FontAwesome name="search" size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginLeft: 40,
    marginRight: 40,
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
  },
  searchInput: {
    height: 40,
    width: "80%",
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: "600",
    overflow: "hidden",
  },
  searchButton: {
    justifyContent: "center",
    marginEnd: 10,
  },
});
