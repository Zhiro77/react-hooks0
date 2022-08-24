import { useImperativeHandle, forwardRef } from 'react'

const Button = forwardRef((props: any, ref: any) => {

    useImperativeHandle(ref, () => ({
        buttonComponentAlert() {
            alert("button component")
        }
    }))

    return (
        <button onClick={() => props.onClick()} ref={props.ref}>
            Button
        </button>
    )
})

export default Button