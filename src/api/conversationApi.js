import jwt from '../utils/jwt';
import axios from './axiosClient';


const conversationApi ={
    getList: async()=>{
        return await axios.get('http://localhost:4000/conversations', {}, 
        { withCredentials: true ,
            headers: {
                'Authorization': jwt.getToken()
            }
        })
    }
}

export default conversationApi;