import React from 'react';
import { Input } from 'antd';

import { SearchWrapper } from './shared.styles';
import { SearchOutlined } from '@ant-design/icons';

type Props = {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onPressEnter?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onSearch: (query: any) => void;
  className?: string;
};
const SearchInput = ({
  defaultValue,
  placeholder,
  value,
  onPressEnter,
  onChange,
  onSearch,
  className,
}: Props) => {
  return (
    <SearchWrapper className={className}>
      <Input
        prefix={<SearchOutlined onClick={() => onSearch(value)} />}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onPressEnter={onPressEnter}
        onChange={onChange}
        value={value}
        size="large"
      />
    </SearchWrapper>
  );
};

export default SearchInput;
