import {axiosClient} from "@/api/axios.js";

const StudentApi = {
    getAll : async ()=>{
       return await axiosClient.get('api/admin/students');
    },
    getStudent: async () => {
        return await axiosClient.get('api/admin/students/');
    },
    delete: async (id,payload) =>{
        return await axiosClient.delete(`/api/admin/students/${id}`, payload);
    }

}
export default StudentApi;