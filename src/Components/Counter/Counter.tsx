import { useReducer } from "react"

import Popup from "../Popup/Popup"

import './Counter.css'

const initialState = {
    count: 0
}

const reducer = (state: { count: number }, action: { type: string; payload: number }) => {
    switch (action.type) {
        case "plus":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "minus":
            return {
                ...state,
                count: state.count - action.payload
            }
        case "times":
            return {
                ...state,
                count: state.count * action.payload
            }
        case "divide":
            return {
                ...state,
                count: state.count / action.payload
            }  
        case "zero":
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
                    <button onClick={() => dispatch({type: 'plus', payload: 2})}>+ 2</button>
                    <button onClick={() => dispatch({type: 'minus', payload: 45})}>- 45</button>
                    <button onClick={() => dispatch({type: 'times', payload: 7})}>* 7</button>
                    <button onClick={() => dispatch({type: 'divide', payload: 3})}>/ 3</button>
                    <button onClick={() => dispatch({type: 'zero', payload: 0})}>0</button>
                </div>
            </div>
            <Popup/>
        </>
    )
}

export default Counter