import {axiosClient} from "@/api/axios.js";

const StudentApi = {
    getAll : async ()=>{
       return await axiosClient.get('api/students');
    },
    getStudent: async (id) => {
        return await axiosClient.get(`api/student/${id}`);
    },
    delete: async (id,payload) =>{
        return await axiosClient.delete(`/api/admin/students/${id}`, payload);
    },
    update: async (id, values) => {
        return await axiosClient.put(`api/student/${id}`, values);
    }


}
export default StudentApi;