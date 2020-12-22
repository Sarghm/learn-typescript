import { useCallback, useMemo, useState } from 'react';
import { CODESNAP_COOKIES_POLICY_DISMISSED } from '../consts/storage';

const useCookiesPolicy = () => {
  const [showCookies, setShowCookies] = useState<boolean>(true);

  const showCookiesPolicy = useMemo(() => {
    if (window.localStorage.getItem(CODESNAP_COOKIES_POLICY_DISMISSED))
      return false;
    return showCookies;
  }, [showCookies]);

  const handleDismissedCookiesPolicy = useCallback(() => {
    setShowCookies(false);
    window.localStorage.setItem(CODESNAP_COOKIES_POLICY_DISMISSED, 'true');
  }, []);

  return { showCookiesPolicy, handleDismissedCookiesPolicy };
};

export { useCookiesPolicy };
