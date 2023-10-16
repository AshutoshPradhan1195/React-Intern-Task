import { createContext, useState } from "react"

export const ThemeContext = createContext<{
    lightTheme:boolean
    setLightTheme: React.Dispatch<React.SetStateAction<boolean>>
} | null>(null);


export const ThemeProvider = (children: any) => {

    const[lightTheme, setLightTheme] = useState(false)

    return(
        <ThemeContext.Provider value={{lightTheme, setLightTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}