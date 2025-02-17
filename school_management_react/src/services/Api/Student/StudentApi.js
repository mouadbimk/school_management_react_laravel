import { axiosClient } from "../../../api/axios"

const StudentApi = {
    login : async (email,password) => {
        return await axiosClient.post('/login',{email,password})
    },
    getAdmin: async ()=>{
        return await  axiosClient.get('/api/admin');
    },
    getStudent: async ()=>{
        return await  axiosClient.get('/api/student');
    },
    getTeacher: async ()=>{
        return await axiosClient.get('/api/teacher')
    },
    logout: async ()=>{
        return await axiosClient.post('/logout');
    }
}
export default StudentApi;