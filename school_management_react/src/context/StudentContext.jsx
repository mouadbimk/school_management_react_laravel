import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/studentApi";
export const StudentStateContext = createContext({
    user: null,
    setUser: () => {},
    logout: () => {},
    login:(email,password)=>{},
    authenticated: false,
    setAuthenticated: ()=>{},
    setToken:()=>{},

});
export default function StudentContext({children}){
    const [user,setUser] = useState(null);
    const [authenticated,_setAuthenticated] = useState('trsue' === window.localStorage.getItem('AUTHENTICATED'));
    const login = async (email,password) => {
        return StudentApi.login(email,password);
    }
    const logout = () => {
        setUser(null)
        setAuthenticated(false)
    };
    const setAuthenticated = (isAuthenticated) =>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
    }
    const setToken = (token) =>{
        window.localStorage.setItem('token', token);
    }
    return <>
            <StudentStateContext.Provider value={{
                user,
                login,
                setUser,
                authenticated,
                setAuthenticated,
                logout,
                setToken,
            }}>
                {children}
            </StudentStateContext.Provider>
          </>
}
export const useStudentContext = () =>  useContext(StudentStateContext);