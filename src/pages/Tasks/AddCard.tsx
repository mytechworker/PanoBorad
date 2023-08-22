import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';

export const AddCardButton = styled.div`
background-color: #EBEDF6;
margin: 0;
padding: 10px;
font-weight: bold;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: 0.02em;
color: #5A6175;
border-radius: 0px 0px 13px 13px;
position: sticky;
bottom:0;
width: 330px;
cursor: pointer;

`;

const AddCard = () => {
    return (
        <div>
            <AddCardButton><PlusOutlined /> Add another card</AddCardButton>
        </div>
    )
}

export default AddCard
