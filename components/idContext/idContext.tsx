import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define a new context for managing the username state
interface IdContextType {
  id: number;
  setId: (newId: number) => void;
}

const IdContext = createContext<IdContextType | undefined>(undefined);

// Custom hook to use the UsernameContext
export const useIdContext = (): IdContextType => {
  const context = useContext(IdContext);
  if (!context) {
    throw new Error('useIdContext must be used within a IdProvider');
  }
  return context;
};

// Define props for UsernameProvider component
interface IdProviderProps {
  children: ReactNode; // Define children prop as ReactNode
}

// Provider component to wrap the application and provide the UsernameContext
export const IdProvider: React.FC<IdProviderProps> = ({ children }) => {
  const [id, setId] = useState<number>(() => {
    // Initialize username from localStorage, or use a default value
    if (typeof window !== "undefined") {
      const storedId = localStorage.getItem('id');
      return storedId ? parseInt(storedId) : 0; // Parse the string to a number
    } else {
      return 0; // Return default value if localStorage is not available
    }
  });

  const setIdAndStore = (newId: number) => {
    setId(newId);
    localStorage.setItem('id', newId.toString()); // Store the id as a string
  };

  return (
    <IdContext.Provider value={{ id, setId: setIdAndStore }}>
      {children}
    </IdContext.Provider>
  );
};
