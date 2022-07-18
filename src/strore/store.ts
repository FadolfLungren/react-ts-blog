import {combineReducers} from "redux";
import {PacksReducer} from "./slices/PacksSlice";
import {configureStore} from "@reduxjs/toolkit";
import {AuthReducer} from "./slices/AuthSlice";

const rootReducer = combineReducers({
    PacksReducer,
    AuthReducer
})

export const setupStore = ()=> {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
