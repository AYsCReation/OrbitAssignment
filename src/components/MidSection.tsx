import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface MidSectionProps {
  title: string;
  data: { id: string; title: string; image: string }[];
}

const MidSection: React.FC<MidSectionProps> = ({ title, data }) => {
  return (
    <>
      {data.length ? (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.text}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      ) : (
        <View style={styles.sectionContainer}><span style={styles.sectionTitle}>{title}</span> Section has no Data to show</View> 
    )}
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#5A7A7F",
  },
  item: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  text: {
    textAlign: "center",
    marginTop: 5,
  },
});

export default MidSection;
