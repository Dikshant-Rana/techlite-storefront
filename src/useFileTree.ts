import { useState, useEffect } from 'react';

export interface WebNode {
  id: string;
  name: string;
  isFolder: boolean;
  children?: WebNode[];
}

const DEFAULT_API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? 'http://localhost:5000' : 'https://backend.techlite.com.np');

export function useFileTree(apiUrl: string = DEFAULT_API_URL) {
  const [treeData, setTreeData] = useState<WebNode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${apiUrl}/api/tree`)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch remote folder structure");
        return res.json();
      })
      .then((data) => {
        setTreeData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [apiUrl]);

  const getDownloadUrl = (fileId: string) => `${apiUrl}/api/retrieve/${fileId}`;

  return { treeData, isLoading, error, getDownloadUrl };
}
