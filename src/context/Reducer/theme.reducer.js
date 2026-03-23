import { act } from "react";
import { TOGGLE_THEME } from "../ActionType";

export const ThemeReducer=(state,action)=>{
    console.log('action',action);
    
    switch(action.type){
         case TOGGLE_THEME:{
            return{
                theme:action.payload
            }
         }
         default:{
            return state
         }
    }
}