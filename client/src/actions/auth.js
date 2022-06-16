import * as api from '../api';
export const signin=(formData,history)=>async (dispatch)=>{
try {
    //login the user 
    const {data} = await api.signIn(formData);
    console.log("lol")
    dispatch({type:'AUTH',data})
    history.push('/')
} catch (error) {
    console.log("ere")
    console.log(error)
}
}
export const signup=(formData,history)=>async (dispatch)=>{
try {
    //signup in the user 
    const {data} = await api.signUp(formData);
    dispatch({type:'AUTH',data})
    history.push('/')
} catch (error) {
    console.log(error)
}
}