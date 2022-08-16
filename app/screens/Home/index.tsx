import { View, Text } from '@myapp/components/Themed';
import { RootTabScreenProps } from '@myapp/layout/types';

const Home = ({ navigation }: RootTabScreenProps<'Home'>) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
