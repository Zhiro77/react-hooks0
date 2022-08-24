import { useId } from "react"

const EmailForm = () => {

    const id = useId()

    return (
        <>
            <label htmlFor={`${id}-email`}>Email</label>
            <input id={`${id}-email`}/>
            <br />
            <label htmlFor={`${id}-name`}>Name</label>
            <input id={`${id}-name`} type="text"/>
        </>
    )
}

export default EmailForm