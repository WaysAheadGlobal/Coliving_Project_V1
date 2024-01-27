import { Outlet } from "react-router-dom"
import './../../src/assets/responsive.css';
import TopMenu from  './../componenets/TopMenu';
import Footer from  './../componenets/Footer';

export default function BaseLayout() {
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