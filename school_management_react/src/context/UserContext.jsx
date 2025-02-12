import {createContext, useContext, useState} from "react";
import StudentApi from "../services/Api/Student/studentApi";
export const UserStateContext = createContext({
    user: {},
    setUser: () => {},
    logout: () => {},
    login:(email,password)=>{},
    authenticated: false,
    setAuthenticated: ()=>{

    }
});
export default function UserContext({children}){
    const [user,setUser] = useState();
    const [authenticated,_setAuthenticated] = useState(window.localStorage.getItem('AUTHENTICATED'));
    const login = async (email,password) => {
        await StudentApi.getCsrfToken()
        return StudentApi.login(email,password);
    }
    const logout = () => {
        setUser({})
        _setAuthenticated(false)
    };
    const setAuthenticated = (isAuthenticated) =>{
        _setAuthenticated(isAuthenticated)
        window.localStorage.setItem('AUTHENTICATED', isAuthenticated);
    }
    return <>
            <UserStateContext.Provider value={{
                user,
                login,
                setUser,
                authenticated,
                setAuthenticated,
                logout,
            }}>
                {children}
            </UserStateContext.Provider>
          </>
}
export const useUserContext = () =>  useContext(UserStateContext);