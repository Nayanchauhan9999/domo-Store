// import { createSlice } from "@reduxjs/toolkit";

// const localData = createSlice({
//     name:"localdata",
//     initialState :{},
//     reducers:{
//         login(state,action){
//         localStorage.setItem("userData", JSON.stringify(action.payload))
//         return state = JSON.parse(localStorage.getItem("userData")) 
//         },
//         logout(state,action){
//         localStorage.removeItem("userData")
//         }
//     }
// })
// export const {login , logout} = localData.actions
// export default localData