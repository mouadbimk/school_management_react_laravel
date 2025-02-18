import { axiosClient } from "@/api/axios.js"

const ParentApi = {
    create:async(payload)=>{
        return await axiosClient.post('/api/admin/parents',payload);
    },
    all:async()=>{
        return await axiosClient.get('/api/admin/parents/');
    },
    delete:async(id)=>{
        return await axiosClient.delete(`/api/admin/parents/${id}`);
    }
}
export default ParentApi;