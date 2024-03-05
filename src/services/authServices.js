import axios from 'axios';
// eslint-disable-next-line no-undef
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

async function login(data) {
    const headers = {
        'content-type': 'application/json',
    };
    return axios
        .post(API_URL + '/users/login', data, { headers })
        .then((response) => {
            return response.data;
        })
}

async function UserInfo(token) {
    const headers = {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + token
    }
    return axios.get(API_URL + '/users/me', { headers }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    })
}

async function forgetPassword(data) {
    const headers = {
        'content-type': 'application/json',
    }
    return axios.post(API_URL + '/users/forget', data, { headers }).then((response) => {
        return response.data;
    }).catch((error) => {
        throw error;
    })
}

async function resetPassword(key) {
    const headers = {
        'content-type': 'application/json',
    }

    return axios.get(API_URL + '/users/reset/' + key, {headers}).then((response) => {
        return response.data;
    }).catch((error) =>{
        throw error;
    })
}

export default {
    login,
    UserInfo,
    forgetPassword,
    resetPassword,
}
