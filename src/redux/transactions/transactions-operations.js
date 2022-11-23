import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://62f50a13ac59075124c9e4c7.mockapi.io/api/v1';

export const fetchTransactions = createAsyncThunk('transactions/fetch', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/transactions');
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
});

export const saveTransaction = createAsyncThunk('transactions/save', async (transaction, thunkAPI) => {
    try {
        const { data } = await axios.post('/transactions', transaction);
        toast.success(`New transaction was added!`);
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message)
    }
});

