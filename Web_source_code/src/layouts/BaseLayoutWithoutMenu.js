import { Outlet } from "react-router-dom"
import TopMenu from  './../componenets/TopWithoutMenu';
import Footer from  './../componenets/Footer';
import './../../src/assets/responsive.css';

export default function BaseLayoutWithoutMenu() {
    return (
        <>
            <TopMenu />
            <main>                
                <Outlet />
            </main>
            <Footer />
        </>
    )
}