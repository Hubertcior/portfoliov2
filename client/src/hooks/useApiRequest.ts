import { useState, useCallback } from 'react';

interface ApiResponse<T = any> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  execute: (url: string, method: string, body?: any) => Promise<void>;
}

export const useApiRequest = <T = any>(): ApiResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const execute = useCallback(async (url: string, method: string, body?: any) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { data, isLoading, error, execute };
};