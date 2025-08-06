import { useState, useEffect } from 'react';
import { getMapStatus } from './MapConfig';

export const useMapStatus = (location, mapType = null) => {
  const [status, setStatus] = useState({
    exists: false,
    path: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const checkStatus = async () => {
      try {
        setStatus(prev => ({ ...prev, loading: true, error: null }));
        const result = await getMapStatus(location, mapType);
        setStatus({
          exists: result.exists,
          path: result.path,
          loading: false,
          error: null
        });
      } catch (error) {
        setStatus({
          exists: false,
          path: null,
          loading: false,
          error: error.message
        });
      }
    };

    checkStatus();
  }, [location, mapType]);

  return status;
};