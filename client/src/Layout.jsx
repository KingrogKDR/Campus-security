import React from "react";
import { Outlet ,useLocation} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Header1 from "./components/Header1.JSX";

function Layout(){
    const location = useLocation()
    const header = (location.pathname==="/admin")||(location.pathname==="/register") || (location.pathname==="/complain")?<Header1/>:<Header/>
    const footer = (location.pathname==="/")?<Footer/>:null

    return (
        <>
            {header}
            <Outlet />
            {footer}
        </>
    )
}

export default Layout
