import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://wallet-db.onrender.com';

export const fetchTransactions = createAsyncThunk('transactions/fetch', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('api/transactions');
        console.log(data);
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message);
    }
});

export const saveTransaction = createAsyncThunk('transactions/save', async (transaction, thunkAPI) => {
    try {
        const { data } = await axios.post('api/transactions', transaction);
        toast.success(`New transaction was added!`);
        return data;
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message)
    }
});

