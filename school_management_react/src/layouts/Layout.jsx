import { Link, Outlet } from "react-router-dom";

export default function Layout(){
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
            <li className="ml-5 px-2 py-1">
                <Link to={'/users'}>Users</Link>
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