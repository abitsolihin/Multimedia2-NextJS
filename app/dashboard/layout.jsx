import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function DashboardLayout({children}) {
    return (
        <section className="flex w-full h-screen relative">
            <Sidebar/>
            <div className="wrapper w-full overflow-x-hidden overflow-y-scroll">
            {children}
            </div>
        </section>
        );
    }