import { createContext, useState } from "react";


interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void
}
export const GradientContext = createContext({} as ContextProps) //TODO: Definir tipo

export const GradientProvider = ({children}: {children: JSX.Element | JSX.Element[]}) => {
    const [colors, setColors] = useState({
        primary: 'red',
        secondary: 'blue'
    })
    const [prevColors, setPrevColors] = useState({
        primary: 'transparnt',
        secondary: 'transparnt'
    })

    const setMainColors = (colors: ImageColors) => {
        setColors(colors)
    }
    const setPrevMainColors = (colors: ImageColors) => {
        setPrevColors(colors)
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}