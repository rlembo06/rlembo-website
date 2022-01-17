type Item = {
  label: string;
  startDate: number;
  endDate?: number;
  position: string;
  city: string;
  description: string;
  logo: string;
  technos: {
    front?: string[];
    back?: string[];
    infrastructure?: string[];
    cicd?: string[];
    database?: string[];
    test?: string[];
    build?: string[];
    quality?: string[];
    cloud?: string[];
    storage?: string[];
  };
};

export type { Item };
