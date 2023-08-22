import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

import { Formik } from 'formik';
import { SearchWrapper } from './pipeline.style';

const { Search } = Input;

export default ({ onSearch }: any): JSX.Element => {
  return (
    <Formik
      initialValues={{
        search: '',
      }}
      validateOnMount
      onSubmit={onSearch}
    >
      {(formik) => {
        return (
          <SearchWrapper>
            <Search
              placeholder="Search..."
              size="large"
              onSearch={onSearch}
              prefix={
                <SearchOutlined
                  onClick={() => onSearch(formik.values.search)}
                />
              }
            />
          </SearchWrapper>
        );
      }}
    </Formik>
  );
};
