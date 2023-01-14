import * as WebBrowser from "expo-web-browser";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  ActivityIndicator,
} from "react-native";

import Colors from "../constants/Colors";
import { useImageUrl } from "../hooks/useImageUrl";
import { pagination, TV } from "../types/index";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

interface ListProps {
  tv: Array<TV>;
  page: number;
  isLoading: Boolean;
  setPage: any;
  navigation: any;
}

export default function List({
  tv,
  page,
  isLoading,
  setPage,
  navigation,
}: ListProps) {
  const [scrollPosition, setScrollPosition] = useState<number>();
  const [contentHeight, setContentHeight] = useState<number>();
  const listRef = useRef<any>(null);
  useEffect(() => {
    if ((scrollPosition as number) === 0 && page > 2 && !isLoading) {
      const currentPage = page;
      setPage(currentPage - 1);
    }

    if (
      (contentHeight as number) - (scrollPosition as number) <= 1000 &&
      !isLoading
    ) {
      const currentPage = page;
      setPage(currentPage + 1);
    }
  }, [scrollPosition, contentHeight]);
  useEffect(() => {
    if (page >= 2 && listRef) {
      listRef?.current?.scrollTo({
        y: 9056,
        animate: true,
      });
    }
  }, [tv]);
  return (
    <ScrollView
      ref={listRef}
      style={styles.scrollView}
      onMomentumScrollEnd={(e) => {
        setScrollPosition(e.nativeEvent.contentOffset.y);
        setContentHeight(e.nativeEvent.contentSize.height);
      }}
    >
      <View style={styles.getStartedContainer}>
        {page > 2 && <ActivityIndicator size="large" color="#FD8A8A" />}
        {tv &&
          tv.map((e, i) => {
            return (
              <TouchableOpacity
                key={i}
                onPress={() => navigation.navigate("Detail", { id: e.id })}
              >
                <View style={styles.card}>
                  <View>
                    <Image
                      style={styles.image}
                      source={{ uri: useImageUrl(e.backdrop_path) }}
                    />
                    <View style={styles.titleContainer}>
                      <Text style={styles.title}>{e.name}</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                      <Text style={styles.description}>{e.overview}</Text>
                    </View>
                  </View>
                  <View style={styles.flexbox}>
                    <View style={styles.year}>
                      <Text style={styles.badgesText}>
                        {e.first_air_date.split("-")[0]}
                      </Text>
                    </View>
                    <View
                      style={
                        e.popularity <= 500
                          ? styles.popularityBad
                          : e.popularity <= 1000
                          ? styles.popularityAverage
                          : styles.popularityGood
                      }
                    >
                      <Text style={styles.badgesText}>{e.popularity}</Text>
                    </View>
                    <View style={styles.badges}>
                      <Text style={styles.badgesText}>
                        {e.vote_average || "-"}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        <ActivityIndicator size="large" color="#FD8A8A" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: 440,
    margin: 20,
    borderColor: "#CDC2AE",
    borderWidth: 1,
    padding: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    height: 200,
    marginTop: 10,
    width: 300,
    borderRadius: 10,
    marginHorizontal: "auto",
    alignSelf: "center",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  badges: {
    margin: 4,
    backgroundColor: "#F1D3B3",
    padding: 8,
    width: 90,
    borderRadius: 8,
  },
  year: {
    margin: 4,
    backgroundColor: "#F1F7B5",
    padding: 8,
    width: 90,
    borderRadius: 8,
  },
  popularityGood: {
    margin: 4,
    backgroundColor: "#A8D1D1",
    padding: 8,
    width: 90,
    borderRadius: 8,
  },
  popularityAverage: {
    margin: 4,
    backgroundColor: "#F1F7B5",
    padding: 8,
    width: 90,
    borderRadius: 8,
  },
  popularityBad: {
    margin: 4,
    backgroundColor: "#FD8A8A",
    padding: 8,
    width: 90,
    borderRadius: 8,
  },
  badgesText: {
    color: "#65647C",
    fontSize: 16,
    textAlign: "center",
  },
  description: {
    color: "#8B7E74",
    fontSize: 10,
    marginTop: 10,
  },
  descriptionContainer: {
    height: 100,
    overflow: "hidden",
    padding: 2,
  },
  titleContainer: {
    height: 50,
    overflow: "hidden",
  },
  scrollView: {
    width: "100%",
  },
  title: {
    color: "#65647C",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
  },
  getStartedContainer: {
    alignItems: "center",
    // height:100
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 50,
    lineHeight: 50,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
