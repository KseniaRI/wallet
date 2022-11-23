import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { fetchTransactions, saveTransaction } from "./transactions-operations";

const initialState = {
    transactions: [],
    isLoading: false,
    error: null,
}

export const transactionsSlice = createSlice({
    name: 'items',
    initialState,
    extraReducers: {
        [fetchTransactions.pending]: (state) => {
             state.isLoading = true;
        },
        [fetchTransactions.fulfilled]: (state, action) => {
            state.contacts = action.payload;
            state.isLoading = false;
        },
        [fetchTransactions.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [saveTransaction.pending]: (state) => {
            state.isLoading = true;
        },
        [saveTransaction.fulfilled]: (state, action) => {
            state.transactions.push(action.payload);
            state.isLoading = false;
        }, 
        [saveTransaction.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // [deleteContact.pending]: (state) => {
        //      state.isLoading = true;
        // },
        // [deleteContact.fulfilled]: (state, action) => {
        //     state.contacts = state.contacts.filter(item => item.id !== action.payload);
        //     state.isLoading = false;
        // },
        // [deleteContact.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    }
})

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: {
//         value: '',
//     },
//     reducers: {
//         changeFilter(state, action) {
//             state.value = action.payload;
//         },
//     }
// });

export const transactionsReducer = combineReducers({
    items: transactionsSlice.reducer,
    // filter: filterSlice.reducer,
})