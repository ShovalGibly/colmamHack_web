
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { FlexWrapper, Text } from "../utils/constants/styledComponentsGlobal.constant";
import { fireStore } from '../../firebase.config';
import uniqid from 'uniqid';
import { Colors } from '../utils/constants/style.constant';


function Table() {

    const [dataToDisplay, setDataToDisplay] = useState([]);

    const fetchData = () => {
        fireStore.collection("participants")
            .get().then(docs => docs.forEach(doc => setDataToDisplay(prev => [...prev, doc.data()])))
    };

    useEffect(() => {
        fetchData();
    },[]);

    console.log(dataToDisplay);

    if(dataToDisplay < 1) return <FlexWrapper height='100vh' flexDirection='column' backgroundColor='darkPurple'> wait </FlexWrapper>

    return(
        <FlexWrapper flexDirection='column' backgroundColor='darkPurple'>
                <Text>{dataToDisplay.length} מספר רשומים </Text>
                <div style={{display: 'flex', justifyContent: 'center', margin: '0 0 10rem'}}>
                    <StripedDataTableWrapper>
                        <TableHead>
                            <tr>
                                <th>index</th>
                                {Object.keys(tempObject).map(key => 
                                <th key={uniqid()}> {key} </th>
                                )}
                            </tr>
                        </TableHead>
                        <TableBody>
                            {dataToDisplay.sort((a,b) => b.studyYear.localeCompare(a.studyYear)).map((item, index) => 
                                <tr key={uniqid()}>
                                    <td>{index + 1}</td>
                                    {Object.keys(tempObject).map(key => 
                                        <td key={uniqid()}> {item[key]} </td>
                                    )}
                                </tr>
                            )}
                        </TableBody>
                    </StripedDataTableWrapper>
                </div>
        </FlexWrapper>
    );
}

const tempObject = {
    id: '',
    fullName:'',
    email: '',
    mobileNumber: '',
    studyYear: '',
    studyRoute: '',
    aboutSelf: '',
    groupName: '',
    members: '',
}

export const StripedDataTableWrapper = styled.table`

    overflow-y: auto;
    border-spacing: 0;
    text-align: center;
    
    & tr {
        text-transform: capitalize;
        font-size: 1.2rem;
        color: ${Colors.white};
    }
    
    & td, & th {
        padding: 0.8rem;
    }

    @media screen and (max-width: 800px) {
        margin: 1rem;
    }
`;

export const TableHead = styled.thead`
    & tr {
        color: ${Colors.white};
        background-color: ${Colors.lightPurple};
        font-size: 1.3rem;
        letter-spacing: 1px;
    }
`;

export const TableBody = styled.tbody`
    & tr:nth-child(even) {
        background-color: ${Colors.lightPurple}${Colors.opacity40};
    }
`;

export default Table;