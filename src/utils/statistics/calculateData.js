function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];
    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

export const calcDataDoughnut = (transactions) => {
    const allExpenseCategories = transactions.filter(({ type }) => type === false).map(({ category, amount }) => ({ category, amount }));
    const groupedCategories = groupBy(allExpenseCategories, "category");
    const categories = Object.keys(groupedCategories);
    const expenses = Object.values(groupedCategories).map(group => group.reduce((acc, el) => acc + el.amount, 0));
    console.log(categories);
    console.log(expenses)
    return { categories, expenses };
}

export const sumExpenses = (expenses) => expenses.reduce((acc, el) => acc + el, 0).toFixed(2);

export const sumIncomes = (transactions) => transactions.filter(transaction => transaction.type === true).reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2);