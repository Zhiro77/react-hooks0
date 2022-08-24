import { useCallback, useRef, useState } from "react"

import Button from "../Button/Button"

import './Form.css'

const Form = () => {

    const button = useRef(null)

    const input = useRef<HTMLInputElement>(null!)

    const [text, setText] = useState('')

    const handleSubmit = useCallback((e: { preventDefault: () => void }) => {
        e.preventDefault()

        setText(input.current.value)
        
        input.current.value = ''
    }, [])

    return (
        <>
            <div className="Form"> 
                <form onSubmit={e => handleSubmit(e)}>
                    <input type="text" placeholder="text" ref={input}/>
                    <button>submit</button>
                </form>
                <h2>{text}</h2>
            </div>

            <div className="Button">
                <Button onClick={() => alert("button")} ref={button}/>
                <button onClick={() => console.log("buttonRef", button)}>Reference</button>
            </div>
        </>
    )
}

export default Form