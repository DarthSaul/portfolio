import React, { useState } from 'react';

const NavContext = React.createContext();

function NavProvider({ children }) {
    const [page, setPage] = useState(null);

    async function setActivePage(page) {
        setPage(page);
    }

    return (
        <NavContext.Provider
            value={{
                page,
                setActivePage
            }}
        >
            {children}
        </NavContext.Provider>
    );
}

export { NavProvider, NavContext };
