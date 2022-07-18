import axios from "axios";

const BASE_URL = "http://localhost:8000"

const $api = axios.create({
    withCredentials:true,
    baseURL:BASE_URL
})

$api.interceptors.request.use((config)=>{
    config!.headers!.authorization = `12332123`
    return config
})

export default $api