import axios from 'axios';

const axiosinstance= axios.create({
  baseURL: 'https://notesapp-mern-backend.onrender.com',
  timeout: 10000,
  headers: { 
    "Content-Type":"application/json"
   }
});

axiosinstance.interceptors.request.use(
    (config) => {
        const accesstoken=localStorage.getItem("token")
        if(accesstoken){
            config.headers.Authorization = `Bearer ${accesstoken}`;
        }
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

export default axiosinstance
