import { useState, useEffect } from 'react';

export interface WebNode {
  id: string;
  name: string;
  isFolder: boolean;
  children?: WebNode[];
}

// Pass your backend Express port URL here (defaulted to 5000)
export function useFileTree(apiUrl: string = 'http://localhost:5000') {
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
