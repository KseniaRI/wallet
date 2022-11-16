import { Box } from "components/Box";
import { Chart } from "components/chart/Chart";
import { Table } from "components/table/Table";
import { DiagramTabWrap, Title } from "./DiagramTab.styled";


const DiagramTab = () => {
    return (
        <DiagramTabWrap>
            <Title>Statistics</Title>
            <Box as="div" display="flex">
                <Chart />
                <Table/>
            </Box>    
        </DiagramTabWrap>
    )
}

export default DiagramTab;