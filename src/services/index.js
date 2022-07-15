import axios from 'axios';
import axiosInstance from '../axios-instance';
import * as Constants from '../constants';

const postSignIn = async (req) => {
    return await axios({
        method: `post`,
        url: `${Constants.API_URL}/api/user/signin`,
        data: req
    });
}

const postSignUp = async (req) => {
    return await axios({
        method: `post`,
        url: `${Constants.API_URL}/api/users`,
        data: req
    });
}

const signOut = async () => {
    return await axiosInstance({
        method: `delete`,
        url: `${Constants.API_URL}/users/signout`
    });
}

const uploadFile = async () => {
    return await axiosInstance({
        method: `post`,
        url: `${Constants.API_URL}/users/upload`
    });
}


export {
    postSignIn,
    postSignUp,
    signOut,
    uploadFile
}