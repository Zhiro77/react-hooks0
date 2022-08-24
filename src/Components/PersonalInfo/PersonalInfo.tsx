import { useCallback, useState, useRef } from "react"

import { useNavigate } from "react-router-dom"

import './PersonalInfo.css'

interface Person {
    id: number,
    name: string,
    surname: string
}

const PersonalInfo = () => {

    const [person, setPerson] = useState<Person[]>([])

    const input1 = useRef<HTMLInputElement>(null!)
    const input2 = useRef<HTMLInputElement>(null!)

    const navigate = useNavigate()

    const handleSubmit = useCallback((e: { preventDefault: () => void }) => {
        e.preventDefault()

        setPerson([
            ...person,
            {
                id: new Date().getTime(),
                name: input1.current.value,
                surname: input2.current.value
            }
        ])

        input1.current.value = ''
        input2.current.value = ''

        navigate('/')
    }, [])

    return (
        <form className="PersonalInfo" onSubmit={e => handleSubmit(e)}>
            <input type="text" placeholder="name" ref={input1}/>
            <input type="text" placeholder="surname" ref={input2}/>
            <button>submit</button>
        </form>
    )
}

export default PersonalInfo