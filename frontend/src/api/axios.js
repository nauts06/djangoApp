import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:8001"
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }
)


api.interceptors.response.use((res) => res,


    async (error) => {
        if (error.response.status === 401) {
            console.log("Access Token Expired");

        }
        return Promise.reject(error)
        // return api(error.config); yeh samjh nhi aaraha ki kahan rakhe 

        // console.log(error.config);
    })

const refreshToken = localStorage.getItem("refresh");

const response = await axios.post("http://127.0.0.1:8001/api/token/refresh/",

    {

        refresh: refreshToken

    }

);

localStorage.setItem("access", response.data.access);




// ------------------------------------------------------------------------------------------------------

// api.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         const originalRequest = error.config

//         if (error.response?.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true

//             const refresh = localStorage.getItem("refresh")

//             const response = axios.post("http://127.0.0.1:8001/api/token/refresh/",
//                 { refresh })

//                 localStorage.setItem("access" , response.data.access)

//                 originalRequest.headers.Authorization = `Bearer ${response.data.access}`

//                 return api(originalRequest)
//         }
//         return Promise.reject(error)
//     }

// )
export default api;