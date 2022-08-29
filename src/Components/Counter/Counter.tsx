import { useReducer } from "react"

import Popup from "../Popup/Popup"

import './Counter.css'

const initialState = {
    count: 0
}

const PLUS = "plus";
const MINUS = "minus";
const ITMES = "times";
const DIVIDE = "divide";
const ZERO = "zero"


const reducer = (state: { count: number }, action: { type: string; payload: number }) => {
    switch (action.type) {
        case PLUS:
            return {
                ...state,
                count: state.count + action.payload
            }
        case MINUS:
            return {
                ...state,
                count: state.count - action.payload
            }
        case ITMES:
            return {
                ...state,
                count: state.count * action.payload
            }
        case DIVIDE:
            return {
                ...state,
                count: state.count / action.payload
            }  
        case ZERO:
            return {
                ...state,
                count: 0
            }
        default:
            return state
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            <div className="Counter">
                <h1>{state.count}</h1>
                <div className="buttonContainer">
                    <button onClick={() => dispatch({type: PLUS, payload: 2})}>+ 2</button>
                    <button onClick={() => dispatch({type: MINUS, payload: 45})}>- 45</button>
                    <button onClick={() => dispatch({type: ITMES, payload: 7})}>* 7</button>
                    <button onClick={() => dispatch({type: DIVIDE, payload: 3})}>/ 3</button>
                    <button onClick={() => dispatch({type: ZERO, payload: 0})}>0</button>
                </div>
            </div>
            <Popup/>
        </>
    )
}

export default Counter
