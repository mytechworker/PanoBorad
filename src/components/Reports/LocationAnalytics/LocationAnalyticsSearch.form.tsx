import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { SearchInput } from 'components';
import { Formik } from 'formik';
import { SearchWrapper } from '../reports.styles';

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
            <SearchInput
              placeholder="Search Provider"
              onSearch={()=>onSearch(formik.values.search)}
              onPressEnter={(e)=>onSearch(formik.values.search)}
            />
          </SearchWrapper>
        );
      }}
    </Formik>
  );
};
