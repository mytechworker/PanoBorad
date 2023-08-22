import styled from 'styled-components';
import { useState } from 'react';
import { Modal, Avatar, Input, Typography  } from 'antd';
import { Text, Flex, Box, Button, Title5 } from 'components';
import { 
    EditOutlined, 
    BarsOutlined, 
    UserOutlined, 
    TagOutlined, 
    CheckSquareOutlined,
    ClockCircleOutlined, 
    PaperClipOutlined,
    ArrowRightOutlined,
    CopyOutlined,
    EyeOutlined,
    ShareAltOutlined,
    AlignLeftOutlined,
    CreditCardOutlined
} from '@ant-design/icons';

const { TextArea } = Input;
const { Paragraph } = Typography;


export const EditCardButton = styled.div`
    
`;

export const CommentWrapper = styled.div`
    
`;
export const MainContent = styled.div`
    width:550px;
    
    .anticon svg{
        width:25px;
        height:25px;
        vertical-align: text-bottom;
        margin-right:10px;
    }
    .disc_title {
        padding: 10px 0;
    }
`;
export const ModalWrap = styled.div`

`;
export const MainTitle = styled.div`
 .anticon svg {
    width:25px;
    height:25px;
    vertical-align: text-bottom;
    margin-right:10px;
}
`;

export const Sidebar = styled.div`
width: calc(100% - 560px);
padding-left:15px;
    .actions {
        margin-bottom: 16px;
        .sidebar_title {
            text-transform: uppercase;
        }
        .hdhHVY {
            color: #5e6c84;
            font-size: 12px;
            font-weight: 500;
            letter-spacing: .04em;
            line-height: 16px;
            
        }
    }
    a {
        // color: #172b4d;
        background-color: #091e420a;
        border: none;
        border-radius: 3px;
        box-shadow: none;
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        height: 32px;
        margin-top: 8px;
        max-width: 300px;
        overflow: hidden;
        padding: 6px 12px;
        position: relative;
        text-decoration: none;
        text-overflow: ellipsis;
        transition-duration: 85ms;
        transition-property: background-color,border-color,box-shadow;
        transition-timing-function: ease;
        -webkit-user-select: none;
        user-select: none;
        white-space: nowrap;

        .anticon {
            margin-right:10px;
            color: #5e6c84;
        }
    }
`;

export const GreyButton = styled.button`
    align-items: center;
    background-color: #091e420a;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    box-sizing: border-box;
    color: #172b4d;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    padding: 6px 12px;
    margin-left:15px;

`;


const EditCardModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [editableStr, setEditableStr] = useState('This is an editable text.');

    return (
        <>
            <EditCardButton onClick={showModal} >
                {/* <EditOutlined />  */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2448 0.25C11.0573 0.25 10.8623 0.325 10.7198 0.4675L9.34729 1.84L12.1598 4.6525L13.5323 3.28C13.8248 2.9875 13.8248 2.515 13.5323 2.2225L11.7773 0.4675C11.6273 0.3175 11.4398 0.25 11.2448 0.25ZM8.545 4.76512L9.235 5.45512L2.44 12.2501H1.75V11.5601L8.545 4.76512ZM0.25 10.9374L8.545 2.64239L11.3575 5.45489L3.0625 13.7499H0.25V10.9374Z" fill="#6F7D97" />
                </svg>
            </EditCardButton>
            <ModalWrap>
            <Modal 
                // title="Amending noxious weed seed rule" 
                footer={false}
                visible={isModalVisible} 
                onOk={handleOk} 
                onCancel={handleCancel}
                width={768}
            >
                <MainTitle>
                    <Title5 marginBottom="15px"><CreditCardOutlined /> Amending noxious weed seed rule</Title5>
                </MainTitle>
                <Flex justifyContent="space-between" alignItems="flex-start">
                    <MainContent>
                        <Flex
                         justifyContent="flex-start"
                         alignItems="flex-start" 
                         className="disc_title"   
                        >
                            <Text fontSize="16px" weight="700">
                                <AlignLeftOutlined /> Description
                            </Text>
                            <GreyButton >Edit</GreyButton>
                        </Flex>
                        <Box marginLeft="40px">
                            {/* <Paragraph editable={{ onChange: setEditableStr }}>{editableStr}</Paragraph> */}
                            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ut perferendis neque? Tenetur neque mollitia minus quidem voluptates earum voluptatum unde asperiores? Libero molestias officia dicta architecto sequi natus fuga!</p>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate tenetur laudantium aut pariatur harum, delectus illum, dicta laboriosam velit debitis? Maiores similique ipsum consequuntur labore doloribus aspernatur ratione unde.</p>
                        </Box>
                        <Flex
                            justifyContent="space-between"
                            className="disc_title"
                        >
                            <Text fontSize="16px" weight="700">
                                <BarsOutlined /> Activity
                            </Text>
                            <GreyButton>Show details</GreyButton>
                        </Flex>
                        <CommentWrapper>
                            <Flex justifyContent="flex-start" alignItems="flex-start">
                                <Avatar style={{ color: '#fff', fontSize:12, marginRight:10, backgroundColor: '#F2A93D' }}>SG</Avatar>
                                <TextArea
                                    name="body"
                                    placeholder="Write a comment…"
                                    rows={2}
                                />
                            </Flex>
                        </CommentWrapper>
                    </MainContent>
                    <Sidebar>
                        <div className="actions">
                            <Text className="sidebar_title">Suggested</Text>
                            <a className="" href="#" title="Join">
                                <UserOutlined />
                                <Text>Join</Text>
                            </a>
                        </div>
                        <div className="actions">
                            <Text className="sidebar_title">Add to card</Text>
                            <a className="" href="#" title="Join">
                                <UserOutlined />
                                <Text>Members</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <TagOutlined />
                                <Text>Labels</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <CheckSquareOutlined />
                                <Text>Checklist</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <ClockCircleOutlined />
                                <Text>Dates</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <PaperClipOutlined />
                                <Text>Attachment</Text>
                            </a>
                        </div>
                        <div className="actions">
                            <Text className="sidebar_title">Actions</Text>
                            <a className="" href="#" title="Join">
                                <ArrowRightOutlined />
                                <Text>Move</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <CopyOutlined />
                                <Text>Copy</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <EyeOutlined />
                                <Text>Watch</Text>
                            </a>
                            <a className="" href="#" title="Join">
                                <ShareAltOutlined />
                                <Text>Share</Text>
                            </a>
                        </div>
                    </Sidebar>        
                </Flex>    
            </Modal>
            </ModalWrap>
        </>
    )
}

export default EditCardModal
