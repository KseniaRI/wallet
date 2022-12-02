import { Box } from "components/Box";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { transactions } from '../../utils/transactions';
import { calcDataDoughnut, sumExpenses } from "utils/statistics/calculateData";
import { Expenses } from "./Chart.styled";
import { doughnutColors } from '../../utils/statistics/doughnutColors';
import { useSelector } from "react-redux";
import { getTransactions } from "redux/transactions/transactions-selectors";

ChartJS.register(ArcElement, Tooltip);




// export const data = {
//   labels: categories,
//   datasets: [
//     {
//       label: 'EUR',
//       data: expenses,
//       backgroundColor: doughnutColors,
//       borderColor: doughnutColors,
//       borderWidth: 1,
//     },
//   ],
// };
export const Chart = () => {
  const transactionsList = useSelector(getTransactions);
  const { categories, expenses } = calcDataDoughnut(transactionsList);

  const data = {
  labels: categories,
  datasets: [
    {
      label: 'EUR',
      data: expenses,
      backgroundColor: doughnutColors,
      borderColor: doughnutColors,
      borderWidth: 1,
    },
  ],
};

    return (
        <Box as="div"  pr={30} position="relative" zIndex={1}>
        <Doughnut data={data}
          width={320}
          height={320} />
          <Expenses>&#8364; {sumExpenses(expenses)}</Expenses>
        </Box>
    )
}