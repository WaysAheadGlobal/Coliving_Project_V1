import { Outlet } from "react-router-dom"
import TopMenu from  './../componenets/TopMenu';
import Footer from  './../componenets/Footer';
import './../../src/assets/responsive.css';
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