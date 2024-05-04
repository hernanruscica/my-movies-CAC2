import React, {useState, createContext} from 'react';

export const UserContext = createContext(null)

export const UserProvider = ({children}) => {
    const [currentPage, setCurrentPage] = useState('about');
    const [language, setLanguage] = useState('esp');
    const [palette, setPalette] = useState('light');
    
    const contextValue = {
        currentPage: [currentPage, setCurrentPage],
        currentLanguage: [language, setLanguage],
        currentPalette: [palette, setPalette]
      };
  return (
    <UserContext.Provider value={contextValue}>        
        {children}
    </UserContext.Provider>
  )
}
