const initiolState = {
    todo : [],
    dark: false
}





export const Reducer = (state = initiolState, action) => {
 switch(action.type) {
    case "ADD_TODO" : 
    return {...state , todo : [...state.todo, {
        id: state.todo.length ? state.todo[state.todo.length -1].id + 1 : 1 ,
        title : action.payload
    }]}
    case "DEL_BTN" : 
    return {...state , todo : state.todo.filter((el) => el.id !== action.payload.id)}
    case "DARK" : 
    return {...state ,dark : action.payload }
    default : 
    return state
 }
}