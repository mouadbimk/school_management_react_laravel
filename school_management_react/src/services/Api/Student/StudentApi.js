import { axiosClient } from "../../../api/axios"

const StudentApi = {
    login : async (email,password) => {
        return await axiosClient.post('/login',{email,password})
    },
    getUser: async ()=>{
        return await  axiosClient.get('/api/user');
    },
    logout: async ()=>{
        return await axiosClient.post('/logout');
    }
}
export default StudentApi;