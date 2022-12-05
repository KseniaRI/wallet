import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://wallet-db.onrender.com';
 
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const signup = createAsyncThunk('auth/signup', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('api/auth/signup', credentials);
        return data;
    } catch (error) {
        toast.error('Sorry... Something went wrong');
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('api/auth/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        toast.error('Something went wrong, check your email o password');
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('api/auth/logout', async (_, thunkAPI) => {
    try {
        await axios.get('/api/auth/logout');
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
        return thunkAPI.rejectWithValue();
    }
     token.set(persistedToken);
    if (persistedToken) {
        try {
            const response = await axios.get('api/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
})