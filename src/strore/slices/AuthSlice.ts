import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../models/UserModel";
import {SliceActions} from "@reduxjs/toolkit/dist/query/core/buildSlice";


interface AuthState{
    User:User | undefined
    isAuth:boolean
    pending:boolean
    error:string
}

const initialState = {
    User:{},
    isAuth:false,
    pending:false,
    error:''
} as AuthState

export const AuthSlice = createSlice({
    name:'AuthSlice',
    initialState,
    reducers:{
        loginPending(state){
            state.pending = true
        },
        loginSuccess(state, action:PayloadAction<User>){
            state.isAuth = true
            state.pending = false
            state.User = action.payload
            state.error = ''
        },
        loginError(state, action:PayloadAction<string>){
            state.isAuth = false
            state.pending = false
            state.error = action.payload
        },
        logout(state){
            state.isAuth = false
            state.User = undefined
            state.pending = false
            state.error = ''
        }
    }
})

export const AuthReducer = AuthSlice.reducer