import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const HeaderMedia: React.FC = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://picsum.photos/300' }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
});

export default HeaderMedia;
