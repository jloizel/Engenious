import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a new context for managing the username state
interface JobContextType {
  id: number;
  setId: (newId: number) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Custom hook to use the UsernameContext
export const useJobContext = (): JobContextType => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};

// Define props for UsernameProvider component
interface JobProviderProps {
  children: ReactNode; // Define children prop as ReactNode
}

// Provider component to wrap the application and provide the UsernameContext
export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
  const [id, setId] = useState<number>(() => {
    // Initialize username from localStorage, or use a default value
    if (typeof window !== "undefined") {
      const storedId = localStorage.getItem('id');
      return storedId ? parseInt(storedId) : 0; // Parse the string to a number
    } else {
      return 0; // Return default value if localStorage is not available
    }
  });

  const setJobAndStore = (newId: number) => {
    setId(newId);
    localStorage.setItem('id', newId.toString()); // Store the id as a string
  };

  return (
    <JobContext.Provider value={{ id, setId: setJobAndStore }}>
      {children}
    </JobContext.Provider>
  );
};
