import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { STUDENT_DASHBOARD_ROUTE } from "../router";
import { useUserContext } from "../context/UserContext";

export default function GuestLayout(){
  const {authenticated} = useUserContext()
    const navigate = useNavigate();
    useEffect(()=>{
      if(authenticated){
        //redirect student if already login to dashboard
        navigate(STUDENT_DASHBOARD_ROUTE);
      }
    },[]);
    return <>
       <header>
      <div
        className="items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 mb-4 mx-auto shadow-2xl">
        <div className="text-2xl text-white font-semibold inline-flex items-center">
            <img src="../assets/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex text-white">
            <li className="ml-5 px-2 py-1">
                <Link to={'/'}>Home Page</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/login'}>Login</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/signup'}>SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
        <main className={'container mx-auto px-4'}>
            <Outlet />
        </main>
    </>
}