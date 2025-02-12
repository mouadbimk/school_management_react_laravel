import { Link, Outlet, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../router";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import StudentApi from "../services/Api/Student/studentApi";

export default function StudentDashboardLayout(){
  const {setUser,setAuthenticated,logout} = useUserContext();
  const navigate = useNavigate();
 useEffect(()=>{
      StudentApi.getUser().then(({data}) =>{
      setUser(data);
      setAuthenticated(true);
    }).catch(()=>{
      logout();
      navigate(LOGIN_ROUTE);
    });    
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
                <Link to={'/student-dashboard'}>Dashboard</Link>
            </li>
            <li className="ml-5 px-2 py-1">
                <Link to={'/login'}>Logout</Link>
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