import React, { useState } from 'react';
import { Select } from 'antd';
import { Box, Text, Flex, SubmitElement, SwitchElement } from 'components';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { QuestionCircleFilled } from '@ant-design/icons';
import { TitleWrapper, SelectRoleUserWrapper } from './shared.styles';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('No Email provided'),
  password: yup.string().required('No password provided'),
});

const { Option } = Select;

export default (): JSX.Element => {
  const [role, setRole] = useState({});

  return (
    <>
      <TitleWrapper>
        <Text className="employee-modal-title">
          User Permissions
          <QuestionCircleFilled />
        </Text>
      </TitleWrapper>
      <Formik
        initialValues={{}}
        validateOnMount
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Box as={Form}>
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                marginTop="10px"
                marginBottom="20px"
                borderBottom="1px solid"
                borderColor="gray2"
              >
                <Box marginRight="35px">
                  <SwitchElement
                    formik={formik}
                    name="conversations"
                    label="Conversation"
                  />
                  <SwitchElement
                    formik={formik}
                    name="marketing"
                    label="marketing"
                  />
                  <SwitchElement
                    formik={formik}
                    name="reports"
                    label="reports"
                  />
                  <SwitchElement formik={formik} name="flow" label="flow" />
                  <SwitchElement
                    formik={formik}
                    name="onlinebooking"
                    label="Online Booking"
                  />
                  <SwitchElement
                    formik={formik}
                    name="review"
                    label="Reviews"
                  />
                </Box>
                <Box>
                  <SwitchElement
                    formik={formik}
                    name="morning Huddle"
                    label="Morning Huddle"
                  />
                  <SwitchElement
                    formik={formik}
                    name="supervisor"
                    label="Supervisor"
                  />
                  <SwitchElement
                    formik={formik}
                    name="pipeline"
                    label="Pipeline"
                  />
                  <SwitchElement
                    formik={formik}
                    name="triggers"
                    label="Triggers"
                  />
                  <SwitchElement
                    formik={formik}
                    name="follow Up"
                    label="Follow Up"
                  />
                  <SwitchElement
                    formik={formik}
                    name="setting"
                    label="Setting"
                  />
                </Box>
              </Flex>
              <Flex
                flexDirection="column"
                justifyContent="flex-start"
                width="100%"
              >
                <SelectRoleUserWrapper>
                  <Text className="role-header">User Role</Text>
                  <Select
                    placeholder="User"
                    onChange={(value) => setRole({ value })}
                  >
                    <Option value="role">Role</Option>
                    <Option value="role">Role</Option>
                  </Select>
                </SelectRoleUserWrapper>
                <SelectRoleUserWrapper>
                  <Text className="role-header">Add To Location</Text>
                  <Select
                    placeholder="Select Location"
                    onChange={(value) => setRole({ value })}
                  >
                    <Option value="role">location</Option>
                    <Option value="role">location</Option>
                  </Select>
                </SelectRoleUserWrapper>
              </Flex>
              <Flex justifyContent="flex-end">
                <SubmitElement
                  size="medium"
                  type="secondary"
                  shape="fill"
                  formik={formik}
                  // loading={submitting}
                  label="Save"
                />
              </Flex>
            </Box>
          );
        }}
      </Formik>
    </>
  );
};
