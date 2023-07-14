import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [link, setLink] = useState('home')

    const activeLink = (value) => {
        setLink(value)
    }

    return (
        <DataContext.Provider value={{
            activeLink, link
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext; 