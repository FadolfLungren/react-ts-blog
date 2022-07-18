import {AppDispatch} from "./store";
import axios from "axios";
import {PacksSlice} from "./slices/PacksSlice";
import {SiPackage} from "../models/PackageModel";
import $api from "../http";
import {User} from "../models/UserModel";
import {AuthSlice} from "./slices/AuthSlice";

export const fetchSiPacks = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(PacksSlice.actions.SiPacksLoading())
        const response = await $api.get<SiPackage[]>("/SIPacks")
        dispatch(PacksSlice.actions.SiPacksSuccess(response.data))
    }catch (e:any) {
        dispatch(PacksSlice.actions.SiPacksLoadingError(e.message))
    }
}

export const Auth = (username:string, password:string) => async (dispatch:AppDispatch) => {
    try {
        dispatch(AuthSlice.actions.loginPending())
        const response = await $api.post<User>("/login", {username, password})
        dispatch(AuthSlice.actions.loginSuccess(response.data))
    }catch (e:any) {
        dispatch(AuthSlice.actions.loginError(e.message))
        dispatch(AuthSlice.actions.logout())
    }
}

