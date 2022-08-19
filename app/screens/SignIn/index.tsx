import { ButtonText, Text } from '@myapp/theme/Text';
import { View } from '@myapp/theme/View';
import { TouchableOpacity } from '@myapp/theme/Buttons';
import { AuthProps } from '@myapp/navigation/Auth/types';

const SignIn = ({ navigation }: AuthProps<'SignIn'>) => {
  return (
    <View>
      <Text>Sign In</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Root', {
            screen: 'HomeStack',
            params: {
              screen: 'Home',
            },
          })
        }
      >
        <ButtonText>Click</ButtonText>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
