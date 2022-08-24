import { useState, useRef, useLayoutEffect } from 'react'

import './Popup.css'

const Popup = () => {
    const [show, setShow] = useState(false)
    const popup = useRef<HTMLDivElement>(null!)
    const button = useRef<HTMLButtonElement>(null!)

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return
        const { bottom } = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])

    return (
        <div className="Popup">
            <button ref={button} onClick={() => setShow(!show)}>
                Click
            </button>
            {show && (
                <div className="PopupText" ref={popup} style={{position: "absolute"}}>
                    This is a Popup
                </div>
            )}
        </div>
    )
}

export default Popup