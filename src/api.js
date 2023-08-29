import axios from "axios";

const request  = axios.create({
    baseURL : 'https://youtube.googleapis.com/youtube/v3/',

    params:{
        key:"AIzaSyDK7ZtH9IWSulA-TLVoYU8npQt3NgsPVnQ",
    },

})

export default request;