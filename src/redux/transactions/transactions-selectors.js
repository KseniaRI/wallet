export const getTransactions = state => state.transactions.items.transactions;
export const getIsLoading = state => state.transactions.items.isLoading;
export const getMonth = state => state.transactions.filter.month;
export const getYear = state => state.transactions.filter.year;

export const getVisibleTransactions = state => {
   const allTransactions = getTransactions(state);
   const month = getMonth(state);
   const year = getYear(state)
  
   return allTransactions.filter(transaction =>
    transaction.date.slice(3, 5) === month && transaction.date.slice(6) === year
    ) 
  };