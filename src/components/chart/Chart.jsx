import { Box } from "components/Box";
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { transactions } from '../../utils/transactions';
import { calcDataDoughnut, sumExpenses } from "utils/statistics/calculateData";
import { Expenses } from "./Chart.styled";
import { doughnutColors } from '../../utils/statistics/doughnutColors';

ChartJS.register(ArcElement, Tooltip);

const { categories, expenses } = calcDataDoughnut(transactions);


export const data = {
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
export const Chart = () => {
    return (
        <Box as="div"  pr={30} position="relative">
          <Doughnut data={data} width={320} height={320}/>
          <Expenses>&#8364; {sumExpenses(expenses)}</Expenses>
        </Box>
    )
}