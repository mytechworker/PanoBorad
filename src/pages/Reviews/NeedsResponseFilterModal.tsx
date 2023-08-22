import styled from 'styled-components';
import { useState } from 'react';
import { Modal, Input, Select } from 'antd';
import { Text, Flex, Button, Box, SearchInput } from 'components';
import {
    FilterOutlined,
    DownOutlined,
  } from '@ant-design/icons';

const { Option } = Select;

export const FilterButton = styled.button`
    font-weight: 600;
    font-size: 13px !important;
    border-radius: 5px;
    background: #fff;
    color: #6F7D97;
    height: 36px !important;
    white-space: nowrap;
    text-align: center;
    border: none;
    cursor: pointer;
    padding: 4px 15px;
    margin-right:15px;
    .anticon-down {
        margin-left:13px;
    }
`;
export const SerchInputWrapper = styled.div`
    .filter-search {
        margin-bottom:22px;
        .ant-input-affix-wrapper {
            border: 1px solid #E8E8E8;
            height:36px;
            border-radius:5px;
            .ant-input {
                height:22px;
            }
        }
    }  
`;
export const DateRangeWrapper = styled.div`
    .ant-select {
        width:100%;
        margin-bottom: 22px;
        color: #6F7D97;
        font-weight:600;
        .ant-select-selector{
            border: 1px solid #E8E8E8 !important;
            border-radius: 5px !important;
        }
    }
`;
export const RatingWrapper = styled.div`
    width:50%;
`;

const NeedsResponseFilterModal =   ({ onSearch }: any): JSX.Element  => {
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
    return (
        <>
            
            <FilterButton onClick={showModal} >
                {/* <FilterOutlined /> */}
                Filter
                <DownOutlined />
            </FilterButton>
                <Modal 
                    title="Filter" 
                    footer={false}
                    visible={isModalVisible} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    width={353}
                    // style={{marginRight: 180, top:150}}
                    className="NeedResponseModal"
                >
        
                    <SerchInputWrapper>
                            <SearchInput
                            placeholder="Search..."
                            onSearch={onSearch}
                            className="filter-search"
                            />
                        </SerchInputWrapper>
                        <Text color="#212121" weight="600" fontSize="12px" marginBottom="6px">
                            Date Range
                        </Text>
                        <DateRangeWrapper>
                            <Select
                                placeholder="All Time"
                            >
                            return (
                                    <Option value={22-3-2021}>
                                        <Text fontSize="11px">22-2-2021</Text>
                                    </Option>
                                );
                            </Select>
                        </DateRangeWrapper>
            
                        <Text  marginBottom="10px" fontSize="14px" weight="700">
                            Ratings
                        </Text>
               
                        <Flex justifyContent="space-between">
                            <RatingWrapper style={{marginRight:15}}>
                                <Text color="#212121" weight="700" fontSize="12px" marginBottom="6px">
                                    Min. Rating
                                </Text>
                                <DateRangeWrapper>
                                    <Select
                                    placeholder="1 Star"
                                    >
                                    return (
                                            <Option value={1}>
                                                <Text fontSize="12px">1 Star</Text>
                                            </Option>
                                        );
                                    </Select>
                                </DateRangeWrapper>
                            </RatingWrapper>
                            <RatingWrapper>
                                <Text color="#212121" weight="700" fontSize="12px" marginBottom="6px">
                                Max. Rating
                                </Text>
                                <DateRangeWrapper>
                                    <Select
                                    placeholder="5 Star"
                                        >
                                        return (
                                                <Option value={1}>
                                                    <Text fontSize="12px">5 Star</Text>
                                                </Option>
                                            );
                                    </Select>
                                </DateRangeWrapper>
                            </RatingWrapper>
                        </Flex>    
                    </Modal>
        </>
    )
}

export default NeedsResponseFilterModal
