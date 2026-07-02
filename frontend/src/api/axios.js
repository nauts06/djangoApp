import axios from "axios";

// Create a custom axios instance
const api = axios.create({
    baseURL: "http://127.0.0.1:8001",
});

// ===============================
// REQUEST INTERCEPTOR
// ===============================
// Har request server par jane se pehle yahan se guzregi.
api.interceptors.request.use(

    (config) => {

        // Browser se access token uthao
        const token = localStorage.getItem("access");

        // Agar token hai to Authorization header add karo
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Modified request ko aage bhej do
        return config;
    }

);

// ===============================
// RESPONSE INTERCEPTOR
// ===============================
// Har response server se aane ke baad yahan se guzrega.
api.interceptors.response.use(

    // Agar response successful hai (200, 201...)
    (response) => {
        return response;
    },

    // Agar response me error hai (401, 404, 500...)
    async (error) => {

        // Sirf 401 Unauthorized handle karenge
        if (error.response.status === 401) {

            console.log("Access Token Expired");

            // Browser se refresh token uthao
            const refreshToken = localStorage.getItem("refresh");

            // Refresh API call karo
            const response = await axios.post(
                "http://127.0.0.1:8001/api/token/refresh/",
                {
                    refresh: refreshToken
                }
            );

            // Naya access token save karo
            localStorage.setItem("access",response.data.access);

            // 🔥 YAHI WO LINE HAI JISKE BAARE ME TUM PUCH RAHE THE

            console.log("aaaaaaaa",error.config);
            

            return api(error.config);


        }

        // Agar 401 nahi hai to error waise hi return karo
        return Promise.reject(error);

    }

);

export default api;