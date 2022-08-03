import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {SiPackage} from "../../models/PackageModel";


interface IPacksSlice {
    SiPackages:SiPackage[]
    isLoading:boolean
    error:string
}

const initialState = {SiPackages:[], isLoading:false, error:''} as IPacksSlice

export const PacksSlice = createSlice({
    name:'packs',
    initialState,
    reducers:{
       SiPacksLoading(state){
            state.isLoading = true
        },
        SiPacksSuccess(state, action: PayloadAction<SiPackage[]>){
            state.SiPackages = action.payload
            state.isLoading = false
            state.error = ''
        },
        SiPacksLoadingError(state, action: PayloadAction<string>){
            state.isLoading = false
            state.error = action.payload
        },
        DeleteSiPack(state, action:PayloadAction<number>){
           state.SiPackages = state.SiPackages.filter((el)=> el.id!==action.payload && el)
        }
    }
})


export const PacksReducer = PacksSlice.reducer
