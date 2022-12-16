import { Chart } from "components/chart/Chart";
import { Table } from "components/table/Table";
import { DiagramTabWrap, StatisticsWrap, Title } from "./DiagramTab.styled";

const DiagramTab = () => {
    return (
        <DiagramTabWrap>
            <Title>Statistics</Title>
            <StatisticsWrap>
                <Chart />
                <Table/>
            </StatisticsWrap>    
        </DiagramTabWrap>
    )
}

export default DiagramTab;