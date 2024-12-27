import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Components.styles';

const HeaderTitle: React.FC = () => {
  return (
    <View>
      <Text style={styles.title}>Discover the World</Text>
    </View>
  );
};

export default HeaderTitle;
