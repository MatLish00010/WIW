import { getDocs } from 'firebase/firestore';
import { createCollection } from '@myapp/firebase';
import { Kitchen } from '@myapp/firebase/api/kitchen/types';

const getKitchens = async (): Promise<Kitchen[]> => {
  try {
    const querySnapshot = await getDocs(createCollection<Kitchen>('kitchen'));
    return querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    alert(`Request Error Kitchen: ${e.message}`);
    return e;
  }
};

export default getKitchens;
