import { axiosClient } from "../../../api/axios"

const UserApi = {
    login : async (email,password) => {
        return await axiosClient.post('/login',{email,password})
    },
    getUser: async ()=>{
        return await  axiosClient.get('/api/me');
    },
    logout: async ()=>{
        return await axiosClient.post('/logout');
    }
}
export default UserApi;