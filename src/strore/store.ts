import {combineReducers} from "redux";
import {PacksReducer} from "./PacksSlice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    PacksReducer
})

export const setupStore = ()=> {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
