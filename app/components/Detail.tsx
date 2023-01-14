import { useDetail } from "../hooks/useDetail";
import { Text, View } from "./Themed";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";
import { useImageUrl } from "../hooks/useImageUrl";
import { Seasons } from "../types/index";

interface DetailProps {
  route: any;
  navigation: any;
}
export default function Detail({ route, navigation }: DetailProps) {
  const { id } = route.params;
  const { detail, isLoading } = useDetail(id);
  if (isLoading) {
    return <ActivityIndicator size="large" color="#FD8A8A" />;
  }
  return (
    <View style={[styles.container, { backgroundColor: "#FFF8F3" }]}>
      <ScrollView style={[styles.scrollView, { backgroundColor: "#FFF8F3" }]}>
        <View style={{ backgroundColor: "#FFF8F3" }}>
          <Image
            style={styles.image}
            source={{ uri: useImageUrl(detail?.backdrop_path as string) }}
          />
          <Text style={styles.title}>{detail?.name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{detail?.overview}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.subtitle}>Seasons</Text>
          {detail &&
            detail.seasons &&
            detail.seasons.map((s: Seasons, i: number) => {
              return (
                <View key={i} style={[styles.card, { paddingTop: 20 }]}>
                  <View style={[styles.flexbox, { borderRadius: 10 }]}>
                    <View style={[styles.container, { borderRadius: 10 }]}>
                      <Image
                        style={styles.seasonImage}
                        source={{ uri: useImageUrl(s.poster_path) }}
                      />
                    </View>
                    <View
                      style={[
                        styles.container,
                        { width: "36%", borderRadius: 10,backgroundColor: "#FFF8F3"  },
                      ]}
                    >
                      <Text style={[styles.subtitle, {}]}>Release</Text>
                      <Text style={[styles.description, { marginBottom: 10 }]}>
                        {s.air_date?s.air_date.split("-")[0]:"-"}
                      </Text>
                      <Text style={[styles.subtitle, {}]}>Episodes</Text>

                      <Text style={[styles.description, { marginBottom: 10 }]}>
                        {s.episode_count}
                      </Text>
                    </View>
                  </View>
                  <Text style={[styles.subtitle, {color:"#FFF8F3"}]}>{s.name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Modal", {
                        name: s.name,
                        desc: s.overview,
                        img:useImageUrl(s.poster_path)
                      })
                    }
                  >
                    <View style={styles.seasonOverview}>
                      <Text
                        style={[
                          styles.descriptionOverview,
                          { fontStyle: "italic" },
                        ]}
                      >
                        Season Overview - (Tap To View more)
                      </Text>
                      <Text style={styles.descriptionOverview}>
                        {s.overview}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  image: {
    height: 320,
    // marginTop: 10,
    width: "100%",
    // borderRadius: 10,
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  seasonImage: {
    height: 200,
    // marginTop: 10,
    width: 200,
    borderRadius: 10,
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  title: {
    color: "#65647C",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 440,
    marginVertical: 10,
    borderColor: "#CDC2AE",
    borderWidth: 1,
    // padding: 2,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9EA1D4",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  subtitle: {
    color: "#65647C",
    fontSize: 20,
    textAlign: "left",
    margin: 10,
  },
  descriptionContainer: {
    height: "auto",
    overflow: "hidden",
    padding: 2,
    marginHorizontal: 10,
  },
  seasonOverview: {
    height: 120,
    overflow: "scroll",
    padding: 2,
    width: "80%",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  description: {
    color: "#8B7E74",
    fontSize: 10,
    marginTop: 10,
  },
  descriptionOverview: {
    color: "#8B7E74",
    margin: 4,
    fontSize: 10,
  },
});
