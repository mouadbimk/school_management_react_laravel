import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/studentApi";
export const StudentStateContext = createContext({
    user: null,
    setUser: () => {},
    logout: () => {},
    login:(email,password)=>{},
    authenticated: false,
    setAuthenticated: ()=>{

    }
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
    return <>
            <StudentStateContext.Provider value={{
                user,
                login,
                setUser,
                authenticated,
                setAuthenticated,
                logout,
            }}>
                {children}
            </StudentStateContext.Provider>
          </>
}
export const useStudentContext = () =>  useContext(StudentStateContext);