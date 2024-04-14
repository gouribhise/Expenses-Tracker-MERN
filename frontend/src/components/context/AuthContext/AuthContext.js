import {createContext,useReducer} from 'react'
import axios from 'axios'
import { LOGIN_SUCCESS,LOGIN_FAILED,LOGIN_STARTED } from './authActionTypes'
export const authContext=createContext()

const INITIAL_STATE={
    userAuth:JSON.parse(localStorage.getItem('userAuth')),
    error:null,
    loading:false,
    profile:null
}

//auth reducer
const reducer=(state,action)=>{
switch(action.type){
    case LOGIN_SUCCESS:
        localStorage.setItem('userAuth',JSON.stringify(payload))
        return {
            ...state,loading:false,error:null
        }

}
}
const AuthContextProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,INITIAL_STATE)
    //login 
    const loginUserAction=async(FormData)=>{
        const config={
            headers:{
                "Content-Type":"application/json",
              
            },
        }
        try{
axios.post('http://localhost:8000/api/v1/users/login',FormData,config)
if(res?.data?.status==='success'){
    dispatch({type:LOGIN_SUCCESS,payload:res.data})
}
        }catch(error){
            dispatch({type:LOGIN_FAILED,payload:error?.response?.data?.message})
        }
    }
    return <authContext.Provider value={{loginUserAction}}>{children}</authContext.Provider>
}

export default AuthContextProvider