import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Flex,
  Text,
  InputElement,
  SubmitElement,
  CheckboxElement,
} from 'components';

// Form Validations
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('No Email provided'),
  password: yup.string().required('No password provided'),
});

export default ({
  onSubmit,
  fielderrors,
  submitting,
  onNavigate,
}: any): JSX.Element => {
  return (
    <Formik
      initialValues={{}}
      validateOnMount
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Box width="100%" as={Form} className="security-verification-form">
            <Box className="password-input" margin="0 0 30px">
              <InputElement
                formik={formik}
                label="Email Address"
                name="email"
                type="text"
                placeholder="user@mail.com"
                fielderror={fielderrors?.currentPassword}
              />
            </Box>
            <Box width="100%" margin="0 0 17px">
              <InputElement
                formik={formik}
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
                fielderror={fielderrors?.newPassword}
              />
            </Box>
            <Flex marginBottom="60px">
              <CheckboxElement
                label="Remember Me"
                formik={formik}
                name="remember"
                noMargin={true}
              />
              <Text
                onClick={onNavigate}
                color="primary"
                fontSize="14px"
                weight="600"
                minWidth="157px"
                className="has-cursor"
              >
                Forgot Your Password?
              </Text>
            </Flex>

            <SubmitElement
              size="medium"
              type="secondary"
              shape="fill"
              width="100%"
              formik={formik}
              loading={submitting}
              label="Sign In"
            />
          </Box>
        );
      }}
    </Formik>
  );
};
