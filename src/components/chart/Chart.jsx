import React from 'react';
import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js';
import { calcDataDoughnut, sumExpenses } from "utils/statistics/calculateData";
import { doughnutColors } from '../../utils/statistics/doughnutColors';
import { getVisibleTransactions } from "redux/transactions/transactions-selectors";
import { DoughnutWrap, Expenses, StyledDoughnut } from "./Chart.styled";

ChartJS.register(ArcElement, Tooltip);

export const Chart = () => {
  const filteredTransactions = useSelector(getVisibleTransactions);
  const { categories, expenses } = calcDataDoughnut(filteredTransactions);

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'EUR',
        data: expenses,
        backgroundColor: doughnutColors,
        borderColor: doughnutColors,
        borderWidth: 1,
      }
    ]
  };

  return (
    <DoughnutWrap>
      <StyledDoughnut
        data={data}
        width={320}
        height={320}
      />
      {expenses.length > 0 && <Expenses>&#8364; {sumExpenses(expenses)}</Expenses> }
    </DoughnutWrap>
  )
}