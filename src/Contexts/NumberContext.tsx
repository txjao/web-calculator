import { createContext, ReactNode, useState } from "react";

export const NumberContext = createContext("");

interface NumberProviderProps {
    children: ReactNode;
}

export function NumberProvider({children}: NumberProviderProps){

    const [value, setValue] = useState("");

    console.log(value);

    return(
        <NumberContext.Provider value={value} >
            {children}
        </NumberContext.Provider>
            
    );
}