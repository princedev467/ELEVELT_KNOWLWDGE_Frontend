import { createContext, useReducer } from "react"
import { ThemeReducer } from "./Reducer/theme.reducer";
import { TOGGLE_THEME } from "./ActionType";

const initialState = {
   theme:'light'
}

export const ThemeContext=createContext();

 export const  ThemeProvider=({children})=>{

    const [state,dispatch]=useReducer(ThemeReducer,initialState)

    const ToggleTheme=(val)=>{
        dispatch({type:TOGGLE_THEME,payload:val==='light'?'dark':'light'})
    }

    return(
        <ThemeContext.Provider value={{...state,ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}