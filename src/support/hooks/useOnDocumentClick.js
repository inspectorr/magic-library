import {useEffect} from 'react';

function useOnDocumentClick(onClick = (event) => {}) {
  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('click', onClick);
    }
  }, []);
}

export default useOnDocumentClick;
