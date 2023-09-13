import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import Datetime from 'react-datetime';
import { renderStatInput } from "../../utils/renderInput/RenderInput";
import { calcDataDoughnut, sumExpenses, sumIncomes } from "utils/statistics/calculateData";
import { doughnutColors } from '../../utils/statistics/doughnutColors'
import { Box } from "components/Box";
import { getVisibleTransactions } from "redux/transactions/transactions-selectors";
import { filterSlice } from "redux/transactions/transactions-slice";
import "react-datetime/css/react-datetime.css";
import { FilterWrap, Raw, StatBody, StatHeader, StatTable, TableWrap, TFoot, WrapTotal } from "./Table.styled";

export const Table = () => {

    const filteredTransactions = useSelector(getVisibleTransactions);
    const dispatch = useDispatch();

    const { categories, expenses } = calcDataDoughnut(filteredTransactions);
    const numOfRaws = categories.length;
    const colorsOfCategories = doughnutColors.slice(0, numOfRaws);

    const onMonthChange = (value) => {
        dispatch(filterSlice.actions.changeMonth(moment(value).format('MM')))
    }
    const onYearChange = (value) => {
        dispatch(filterSlice.actions.changeYear(moment(value).format('YYYY')))
    }

    const coloredBlocks = colorsOfCategories.map(color =>
        <Raw key={color}>
            <Box as="div" display="block" width={24} height={24} borderRadius="icon" backgroundColor={color} mr={16} fontSize="s" lineHeight="small" />
        </Raw>);
    
    const categoriesNames = categories.map(category =>
        <Raw key={category}>
            {category}
        </Raw>);
    
    const expensesValues = expenses.map((expense, index) =>
        <Raw key={`${index}-${expense}`}>
            {expense.toFixed(2)}
        </Raw>
    );

    return (
        <TableWrap>  
            <FilterWrap>
            <Datetime
                onChange={onMonthChange}
                dateFormat="MM"
                renderInput={renderStatInput}
                name="month"
                timeFormat={false}
                initialValue="Month"
            />
            <Datetime
                onChange={onYearChange}
                dateFormat="YYYY"
                renderInput={renderStatInput}
                name="year"
                timeFormat={false}
                initialValue="Year"
            />
            </FilterWrap>
            <StatTable>
                <StatHeader>
                        <div>Category</div>
                        <div>Amount</div>
                </StatHeader>
                <StatBody>
                    <Box as="ul" width={40}>
                        {coloredBlocks}
                    </Box>
                    <Box as="ul" width={199} >
                        {categoriesNames} 
                    </Box>
                    <Box as="ul" textAlign="right" flexGrow={1}>
                        {expensesValues} 
                    </Box>   
                </StatBody> 
                <TFoot>
                    <WrapTotal>
                        <span>Expenses:</span>
                        <span>{sumExpenses(expenses)}</span>
                    </WrapTotal>
                    <WrapTotal>
                        <span>Incomes:</span>
                        <span>{sumIncomes(filteredTransactions)}</span>
                    </WrapTotal>
                </TFoot>
            </StatTable>
        </TableWrap>
    )
}