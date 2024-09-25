import { Outlet } from "react-router-dom"; 
import { NavbarTop } from "../components/NavbarTop";
import { Sidebar } from "../components/Sidebar";
import { NavbarBottom } from "../components/NavbarBottom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const MainLayout  = () => {
    return (
        <div className="bg-primaryOne">
            <NavbarTop/>
            <NavbarBottom/>
            <div className="flex">
              <Sidebar/>
              <div className="flex-grow"> 
                <Outlet/>
              </div>
            </div>
            <ToastContainer /> 
        </div>
    )
 }