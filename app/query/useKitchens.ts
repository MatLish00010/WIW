import { useQuery } from '@tanstack/react-query';
import getKitchens from '@myapp/firebase/api/kitchen/getKitchens';

const useKitchens = () => {
  const { data, isLoading } = useQuery(['kitchens'], () => getKitchens());

  return {
    data: data || [],
    isLoading,
  };
};

export default useKitchens;
