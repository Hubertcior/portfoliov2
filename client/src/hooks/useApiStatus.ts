import { useState, useEffect } from 'react';
import type { ApiStatusEndpoint } from '../types/ApiEnpoint';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const useApiStatus = (url: string) => {
  const [data, setData] = useState<ApiStatusEndpoint | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkStatus = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}${url}`);
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const jsonData: ApiStatusEndpoint = await response.json();
      setData(jsonData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Connection error');
      setData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, [url]);

  return { data, isLoading, error, refetch: checkStatus };
};