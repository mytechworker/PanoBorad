import React, { useState } from 'react';
import { Select } from 'antd';
import { Formik } from 'formik';

import { SelectWrapper } from './teamManagement.style';
import { useSelector } from 'react-redux';
import { managementSelector } from 'redux/selectors';

export default ({ selectRole }: any): JSX.Element => {
  const { Option } = Select;
  const { data, fetching } = useSelector(managementSelector.selectRoles);

  return (
    <Formik
      initialValues={{
        role: '',
      }}
      validateOnMount
      onSubmit={(role) => {
        selectRole(role);
      }}
    >
      {(formik) => {
        return (
          <SelectWrapper>
            <Select
              placeholder="Role"
              onChange={(e) => selectRole(e)}
              loading={fetching}
            >
              {data &&
                [{ number: 0, title: 'All' }, ...data].map((role) => (
                  <Option value={role.number} key={role.number}>
                    {role.title}
                  </Option>
                ))}
            </Select>
          </SelectWrapper>
        );
      }}
    </Formik>
  );
};
