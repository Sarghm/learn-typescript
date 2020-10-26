import { useMemo } from 'react';
import { getRegion } from '../utils/get-region';

const useRegion = () => {
  const region = useMemo(() => getRegion(), []);
  return { region };
};

export { useRegion };
