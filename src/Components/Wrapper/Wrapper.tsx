import { Outlet } from "react-router"

import Nav from "../Nav/Nav"

const Wrapper = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

export default Wrapper