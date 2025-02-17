import { axiosClient } from "../../../api/axios"

const ParentApi = {
    create:async(payload)=>{
        return await axiosClient.post('/api/admin/parents',payload);
    }
}
export default ParentApi;