import { Box } from "components/Box";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { renderStatInput } from "utils/renderInput/RenderInput";
import { StatHeader, StatTable, Td, TFoot, ThLeft, ThRight } from "./Table.styled";

export const Table = () => {
    return (
            <Box as="div" position="absolute" zIndex={1} right={85}>  
                <Box as="div" display="flex" width={351} justifyContent="space-between" mb={20}>
                    <Datetime dateFormat="MM" renderInput={renderStatInput} timeFormat={false} initialValue="Month"/>
                    <Datetime dateFormat="YYYY" renderInput={renderStatInput} timeFormat={false} initialValue="Year"/>
                </Box>
                <StatTable>
                    <StatHeader>
                        <tr>
                            <ThLeft>Category</ThLeft>
                            <ThRight>Amount</ThRight>
                        </tr>
                    </StatHeader>
                    <tbody>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000"  mr={16} fontSize="s" lineHeight="small"/>
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">2</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} />
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">4</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} fontSize="s" lineHeight="small"/>
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">2</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} />
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">4</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} fontSize="s" lineHeight="small"/>
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">2</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} />
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">4</Box></Td>
                        </tr>
                        <tr>
                            <Td>
                                <Box as="div" display="flex" alignItems="center" justifyContent="center">
                                    <Box as="div" width={24} height={24} borderRadius="icon" backgroundColor="#000" mr={16} />
                                    qweqwe
                                </Box>
                            </Td>
                            <Td><Box as="span" fontSize="m" lineHeight="normal">4</Box></Td>
                        </tr>
                    </tbody>
                    
                </StatTable>
                <TFoot>
                    <Box as="div"  display="flex" alignItems="center" justifyContent="space-between" width={300} m="0 auto">
                      <span>Expenses:</span>
                      <span>00.00</span>
                    </Box>
                    <Box as="div" display="flex" alignItems="center" justifyContent="space-between" width={300} m="0 auto">
                      <span>Incomes:</span>
                      <span>00.00</span>
                    </Box>
                </TFoot>
            </Box>
        
    )
}