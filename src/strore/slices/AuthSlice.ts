import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../../models/UserModel";
import {SliceActions} from "@reduxjs/toolkit/dist/query/core/buildSlice";


interface AuthState{
    User:User | {}
    pending:boolean
    error:string
}

const initialState = {
    User:{},
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
            state.pending = false
            state.User = action.payload
            state.error = ''
        },
        loginError(state, action:PayloadAction<string>){
            state.pending = false
            state.error = action.payload
        },
        logout(state){
            state.User = {}
            state.pending = false
            state.error = ''
        }
    }
})

export const AuthReducer = AuthSlice.reducer