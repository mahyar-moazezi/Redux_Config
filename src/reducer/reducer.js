const initState ={
    posts:[
        {id:1, title:"Hi",body:"how are you?"},
        {id:2, title:"Hello",body:"I'm good"},
    ]
}
const rootReducer  = (state= initState, action)=>{
    return state
}
export default rootReducer;