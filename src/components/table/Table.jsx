import { Box } from "components/Box";
// import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
// import { renderStatInput } from "utils/renderInput/RenderInput";
import { Raw, StatBody, StatHeader, StatTable, TFoot } from "./Table.styled";
import { calcDataDoughnut, sumExpenses, sumIncomes } from "utils/statistics/calculateData";
import { doughnutColors } from '../../utils/statistics/doughnutColors'
import { useSelector } from "react-redux";
import { getTransactions } from "redux/transactions/transactions-selectors";

export const Table = () => {
    const transactionsList = useSelector(getTransactions);
    const { categories, expenses } = calcDataDoughnut(transactionsList);
    const numOfRaws = categories.length;
    const colorsOfCategories = doughnutColors.slice(0, numOfRaws);

    return (
            <Box as="div" position="absolute" zIndex={1} right={85}>  
                {/* <Box as="div" display="flex" width={351} justifyContent="space-between" mb={20}>
                    <Datetime dateFormat="MM" renderInput={renderStatInput} timeFormat={false} initialValue="Month"/>
                    <Datetime dateFormat="YYYY" renderInput={renderStatInput} timeFormat={false} initialValue="Year"/>
                </Box> */}
                <StatTable>
                    <StatHeader>
                            <div>Category</div>
                            <div>Amount</div>
                    </StatHeader>
                    <StatBody>
                        <Box as="ul" width={40}>
                            {colorsOfCategories.map(color => 
                                <Raw>
                                    <Box as="div" display="block" width={24} height={24} borderRadius="icon" backgroundColor={color}  mr={16} fontSize="s" lineHeight="small"/>
                                </Raw>)}
                        </Box>
                        <Box as="ul" width={199} >
                            {categories.map(category => <Raw>{category}</Raw>)} 
                        </Box>
                        <Box as="ul" textAlign="right" flexGrow={1}>
                            {expenses.map(expense => <Raw>{expense.toFixed(2)}</Raw>)} 
                        </Box>   
                    </StatBody> 
                    <TFoot>
                        <Box as="div"  display="flex" alignItems="center" justifyContent="space-between" width={300} m="0 auto">
                          <span>Expenses:</span>
                        <span>{sumExpenses(expenses)}</span>
                        </Box>
                        <Box as="div" display="flex" alignItems="center" justifyContent="space-between" width={300} m="0 auto">
                          <span>Incomes:</span>
                        <span>{sumIncomes(transactionsList)}</span>
                        </Box>
                    </TFoot>
                </StatTable>
                
            </Box>
        
    )
}