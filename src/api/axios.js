/*eslint-disable*/
import axios from 'axios'
// import qs from 'qs'

// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.timeout = 6000;
axios.defaults.responseType = 'json';

// //发请求前对数据做一些改动
// axios.defaults.transformRequest = [function (data) {
//         //数据序列化
//         return qs.stringify(data);
//     }
// ];

//添加一个响应拦截
axios.interceptors.response.use(function (response){

    let data = response.data?response.data.data:"";
    let status = response?response.status:400;
    if (status == 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response.data?response.data.message : "reject");
    }
})

const headers = {
    "Accept": 'application/json',
    "content-type": 'application/json;charset = UTF-8',
    "accessToken" : localStorage.getItem('oauthToken') || ''
};

// POST
const ajax_post = (url,data) =>{
    return new Promise((resolve, reject)=>{
        axios({
            method:"POST",
            headers: headers,
            url: url,
            data: data,
        }).then(res => {
            resolve(res);
        },err=>{
            resolve(err)
        }).catch(error => {
            console.log(error);
        });
    })
    
}
// GET
const ajax_get = (url) => {
    return new Promise((resolve, reject)=>{
        axios({
            method: "GET",
            headers: headers,
            url: url,
            withCredentials: true
        }).then(res => {
            resolve(res);
        }).catch(error => {
            console.log(error);
        });
    })
}

// 参数拼接在url后的post请求方式
const ajax_post_params = (url,data) => {
    return new Promise((resolve, reject)=>{
        axios({
            method: 'post',
            url: url,
            headers: headers,
            params: data,
        }).then(res => {
            resolve(res);
        },err=>{
            resolve(err)
        }).catch(error => {
            console.log(error);
        });
    })
    
}


const axiosApi = {
    ajax_post,
    ajax_get,
    ajax_post_params
}
export default axiosApi