import axios from './axiosClient';

const userApi = {
    login: async ({ username, password }) => {
        return await axios.post('http://localhost:4000/auth/login', { username, password }, { withCredentials: true });
    },
    logout: async () => {
        return await axios.post('http://localhost:4000/auth/logout', {}, { withCredentials: true });
    },
    getUserByName : async({username})=>{
        return await axios.get('http://localhost:4000/users/search/username/',{username});
    },
    getUserById : async({id})=>{
        return await axios.get(`http://localhost:4000/users/search/id/${id}`);
    }
};

export default userApi;
