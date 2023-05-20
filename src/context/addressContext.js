import { createContext, useContext } from "react";

const AddressContext = createContext();

export const AddressProvider = ({children}) => {
    return (
        <>
            <AddressContext.Provider>
                {children}
            </AddressContext.Provider>
        </>
    )
}

export const useAddress = () => useContext(AddressContext)