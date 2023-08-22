import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { InputElement } from 'components';
import { Formik } from 'formik';
import { SearchWrapper } from '../online-booking.style';

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
              placeholder="Search by Name, DOB (yyymmdd) or Email"
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
