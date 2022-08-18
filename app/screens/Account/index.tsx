import { FC } from 'react';

import { ViewContainer } from '@myapp/theme/View';
import { Text } from '@myapp/theme/Text';
import { AccountScreenProps } from '@myapp/screens/Account/types';

const Account: FC<AccountScreenProps> = () => {
  return (
    <ViewContainer>
      <Text>Account</Text>
    </ViewContainer>
  );
};

export default Account;
