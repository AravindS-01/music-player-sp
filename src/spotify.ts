import axios from "axios";

const clientId = '997ec06428e442298036c7821881ce99';
const redirectUrl = 'http://localhost:3000';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const scopes = ['user-library-read', 'playlist-read-private'];

export const logEndPoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});


// spotify api only accept the bearer token , so by using the axios interceptor , concat the bearer in token
export const setClientToken = (token: string)=>{
    apiClient.interceptors.request.use(async function(config){
    config.headers.Authorization = `Bearer ${token}`;
    console.log("config",config);
    return config;
})
};

export default apiClient;
