import React, { useState } from 'react';
import { Menu, Select, Dropdown, Button } from 'antd';
import { Formik } from 'formik';

import { SelectWrapper } from '../online-booking.style';

export default ({ selectFilter }: any): JSX.Element => {
  const { Option } = Select;

  return (
    <Formik
      initialValues={{
        filter: '',
      }}
      validateOnMount
      onSubmit={(filter) => {
        selectFilter(filter);
      }}
    >
      {(formik) => {
        return (
          <SelectWrapper>
            <Select
              placeholder="Filter"
              onChange={(e) => selectFilter(e)}
              mode="multiple"
            >
              <Option value="1">New patients</Option>
              <Option value="2">Exsiting patients</Option>
            </Select>
          </SelectWrapper>
        );
      }}
    </Formik>
  );
};
