import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Divider } from "../../components/Divider";

export function DefaultLayout() {
    return (
        <div className="px-6">
            <Header />
            <Outlet />
            <Divider direction="horizontal" />
            <Footer />
        </div>
    )
}