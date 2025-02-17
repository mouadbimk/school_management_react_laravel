import { Link, Outlet, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../../router";
import { useEffect, useState } from "react";
import { useStudentContext } from "../../context/StudentContext";
import StudentApi from "../../services/Api/Student/studentApi";
import StudentDropMenu from "./StudentDropMenu";
import { Home, LayoutDashboard, Loader } from "lucide-react";
import { ModeToggle } from "../../components/mode-toggle";
import { StudentAdministrationSidebar } from "../Administartion/StudentAdministartionSidebar";

 
export default function StudentDashboardLayout(){
  const {setUser,logout: contextLogout,authenticated,user} = useStudentContext();
  const [isLoading,setIsLoading] = useState(true);
  const navigate = useNavigate();
 useEffect(()=>{
  if(authenticated === true){
    setIsLoading(false);
    StudentApi.getStudent().then(({data}) =>{
      setUser(data);
    }).catch(()=>{
      contextLogout();
    });  
  }else{
    navigate(LOGIN_ROUTE);
  }
  },[authenticated]);
  if(isLoading){
    return <Loader></Loader>
  }
    return <>
       <header>
      <div
        className="items-center justify-between flex bg-opacity-90 px-12 py-4 mb-4 mx-auto">
        <div className="text-2xl text-white font-semibold inline-flex items-center">
            <img src="../assets/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="flex  items-center">
            <li className="ml-1 px-2 py-1 ">
                <Link to={'/'} className="flex items-center"><Home className="w-6 mx-1"/>Home Page</Link>
            </li>
            <li className="ml-1 px-2 py-1">
                <Link to={'/student-dashboard'} className="flex items-center"><LayoutDashboard className="w-6 mx-1"/>Dashboard</Link>
            </li>
            <li className="ml-1 px-2 py-1">
                <StudentDropMenu />
            </li>
            <li className="ml-1 px-1 py-1">
              <ModeToggle/>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <hr />
        <main className={'mx-auto px-10 space-y-4 py-4'}>
          <div className="flex">
            <div className="w-full md:w-1/4"><StudentAdministrationSidebar/></div>
            <div className="w-full md:w-3/4">
            <div className="text-xl px-10 py-5"><h1 className="text-xl">Hi,{user?.firstname}</h1></div>
            <Outlet />
            </div>
          </div>
        </main>
    </>
}