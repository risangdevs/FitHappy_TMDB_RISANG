import { View } from "./Themed";
import { Dimensions, TouchableOpacity, Text, StyleSheet } from "react-native";

export const Pagination = (props: any) => {
  const { currentPage, setPage, isLoading } = props;

  return (
    <View style={styles.paginationContainer}>
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => {
          if (currentPage > 1) {
            setPage(currentPage - 1);
          }
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Prev</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={isLoading}
        onPress={() => {
          setPage(currentPage + 1);
        }}
        style={styles.button}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    transform: [
      { translateY: Math.floor(Dimensions.get("window").height) / 80 },
      { translateX: Math.floor(Dimensions.get("window").width) / 2.5 },
    ],
    position: "absolute",
    bottom: Math.floor(Dimensions.get("window").height) / 18,
    width: 80,
    height: 120,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "space-around",
  },
  button: {
    borderColor: "#FD8A8A",
    borderWidth: 1,
    justifyContent: "center",
    width: "80%",
    height: "40%",
    borderRadius: 10,
    backgroundColor: "#FD8A8A",
    opacity: .7,shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    marginHorizontal: "auto",
    marginVertical: "auto",
    textAlign: "center",
    alignItems: "center",color:"#fff"
  },
});
