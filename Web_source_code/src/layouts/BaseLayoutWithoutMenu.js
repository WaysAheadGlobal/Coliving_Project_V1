import { Outlet } from "react-router-dom"
import TopMenu from  './../componenets/TopWithoutMenu';
import Footer from  './../componenets/Footer';

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