import { useEffect } from 'react';

export const usePressKey = (code, onCloseArticle) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === code) {
        onCloseArticle();
      }
    };
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [code, onCloseArticle]);
};
