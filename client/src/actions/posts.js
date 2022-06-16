import * as api from '../api';
//action creator
// time:1:2:00
export const getPost=(id)=>async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'})
        const {data}=await api.fetchPost(id);
        // const action={ type:'FETCH_ALL',payload:[]}
        dispatch({ type:'FETCH_POST',payload:data}); 
        dispatch({type:'END_LOADING'})
    } catch (error) {
        console.log(error.message);
    }  
}
export const getPosts=(page)=>async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'})
        const {data}=await api.fetchPosts(page);
        // const action={ type:'FETCH_ALL',payload:[]}
        dispatch({ type:'FETCH_ALL',payload:data}); 
        dispatch({type:'END_LOADING'})
    } catch (error) {
        console.log(error.message);
    }  
}
export const getPostsBySearch=(searchQuery)=>async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'})
        const {data:{data}}=await api.fetchPostsBySearch(searchQuery);
        dispatch({ type:'FETCH_BY_SEARCH',payload:data}); 
        console.log(data)
        dispatch({type:'END_LOADING'})
    } catch (error) {
        console.log(error)
    }
}
export const createPost  = (post,history)=>async(dispatch)=>{
    try {
        dispatch({type:'START_LOADING'})
        const {data}= await api.createPost(post);
        dispatch({type:'CREATE', payload:data});
        history.push(`/posts/${data._id}`)
        // dispatch({type:'END_LOADING'})
    } catch (error) {
        console.log(error);
    }
}
export const updatePost=(id,post)=>async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post);
        dispatch({type:"UPDATE",payload:data})

    } catch (error) {
        console.log(error.message)
    }
}
export const deletePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch({type:'DELETE',payload:id})
    } catch (error) {
        console.log(error.message)
    }
}
export const likePost=(id)=>async(dispatch)=>{
    const user = JSON.parse(localStorage.getItem('profile'))
    try {
        const {data} = await api.likePost(id,user?.token);
        dispatch({type:"LIKE",payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const commentPost=(value,id)=>async(dispatch)=>{
    try {
         const {data}=await api.comment(value,id)
         console.log(data)
    } catch (error) {
        
    }
}
