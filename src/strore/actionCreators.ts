import {AppDispatch} from "./store";
import axios from "axios";
import {PacksSlice} from "./PacksSlice";
import {SiPackage} from "../models/PackageModel";

export const fetchSiPacks = () => async (dispatch:AppDispatch)=>{
    try {
        dispatch(PacksSlice.actions.SiPacksLoading())
        const response = await axios.get<SiPackage[]>('https://mockend.com/FadolfLungren/mockjson/Sipackages')
        dispatch(PacksSlice.actions.SiPacksSuccess(response.data))
    }catch (e:any) {
        dispatch(PacksSlice.actions.SiPacksLoadingError(e.message))
    }
}
