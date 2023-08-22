import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Text,
  Flex,
  Button,
  InputElement,
  SubmitElement,
  Title5,
} from 'components';

const validationSchema = yup.object().shape({
  new_password: yup.string().required('No password provided'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

export default ({ onSubmit, submitting, fielderrors }: any): JSX.Element => {
  return (
    <Formik
      initialValues={{}}
      validateOnMount
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Box as={Form} padding="0 15px">
            <Title5>Change Password</Title5>
            <Box width="100%" marginTop="10px">
              <Flex flexDirection="row" justifyContent="space-between">
                <Box width="100%">
                  <InputElement
                    formik={formik}
                    label="Existing Password"
                    name="old_password"
                    type="password"
                    placeholder="Current Password"
                    fielderror={fielderrors?.old_password}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="100%">
                  <InputElement
                    formik={formik}
                    label="Password"
                    name="new_password"
                    type="password"
                    placeholder="Password"
                    width="100%"
                    fielderror={fielderrors?.new_password}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="100%">
                  <InputElement
                    formik={formik}
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm Password"
                    width="100%"
                    fielderror={fielderrors?.confirm_password}
                  />
                </Box>
              </Flex>
              <Flex justifyContent="flex-start" marginTop="10px">
                <SubmitElement
                  size="medium"
                  type="secondary"
                  shape="fill"
                  formik={formik}
                  loading={false}
                  label="Update Password"
                />
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
