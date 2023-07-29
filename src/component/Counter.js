import React,{useReducer} from 'react'

const initialState = {
  num1:0,
};
const reducer = (state,action) =>{
    switch(action.type){
        case "up":
            return {num1: state.num1 +1}
        case "down":
            return {num1: state.num1 -1}
        case "reset":
            return initialState
        default:
            return state
    }
}

const Counter = () => {

 const [number,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>{number.num1}</h1>
      <button onClick={() => dispatch({type:"up"})} >up</button>
      <button onClick={() => dispatch({type:"reset"})} >reset</button>
      <button onClick={() => dispatch({type:"down"})} >down</button>
    </div>
  )
}

export default Counter
