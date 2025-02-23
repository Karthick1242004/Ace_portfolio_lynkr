import { useState, useEffect } from 'react';

const DATA_URL = 'https://gist.githubusercontent.com/Caliber875/23d57959f05f7069c81e9ac2c4a79140/raw/fdb440daf65a9d8817a1374da3a54ac770932d05/data.json';

interface PortfolioData {
  projects: Array<{
    projectName: string;
    projectType: string;
    projectContent: string;
    projectImage: string;
    projectUrl: string;
    githubUrl: string;
  }>;
  top_project: {
    title: string;
    description: string;
    websiteUrl: string;
    websiteDisplay: string;
  };
  contacts: Array<{
    id: number;
    name: string;
    designation: string;
    url: string;
  }>;
  services: Array<{
    title: string;
    description: string;
  }>;
  skillset: {
    image: string;
  };
  hero: {
    name: string;
    tagline: string;
    resumeUrl: string;
    resumeText: string;
  };
  testimonials: Array<{
    id: number;
    name: string;
    designation: string;
    content: string;
  }>;
}

export function useGetData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}
