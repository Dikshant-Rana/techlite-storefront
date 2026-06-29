import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToTop(): null {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top on PUSH or REPLACE navigation (user-initiated clicks).
    // Avoid resetting scroll on POP navigation (browser back/forward buttons).
    if (navigationType !== 'POP') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [pathname, navigationType]);

  return null;
}
