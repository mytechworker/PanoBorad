import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { Flex } from 'components';

import { SearchWrapper } from './teamManagement.style';

const { Search } = Input;

export default ({ onSearch }: any): JSX.Element => {
  const [searchKey, setSearchKey] = useState('');
  return (
    <Flex background="white" borderRadius="5px" padding="0 10px">
      <SearchOutlined onClick={() => onSearch(searchKey)} />
      <SearchWrapper>
        <Search
          placeholder="Search by name"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          onChange={(event) => setSearchKey(event.target.value)}
          name="search"
          title="search"
        />
      </SearchWrapper>
    </Flex>
  );
};
