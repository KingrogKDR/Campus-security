import React from "react";
import { Outlet ,useLocation} from 'react-router-dom'
import Header from "./components/Header";
import Header1 from "./components/hEADER1.JSX";
function Layout(){
    const location = useLocation()
    const header = (location.pathname==="/admin")||(location.pathname==="/register")?<Header1/>:<Header/>
    return (
        <>
            {header}
            <Outlet />
        </>
    )
}

export default Layout