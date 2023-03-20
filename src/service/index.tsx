import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3001",
    timeout: 6000
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("@token")
    const {headers} = config
    if(token){
        headers.Authorization = `Bearer ${token}`
    }

    return{
        ...config, headers
    }
})