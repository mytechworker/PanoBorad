import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box, InputElement, SubmitElement } from 'components';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('No Email provided'),
});

export default ({ onSubmit, submitting }: any): JSX.Element => {
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
            <Box className="password-input" margin="0 0 56px">
              <InputElement
                formik={formik}
                label="Email Address"
                name="email"
                type="text"
                placeholder="user@mail.com"
              />
            </Box>
            <SubmitElement
              size="medium"
              type="secondary"
              shape="fill"
              width="100%"
              formik={formik}
              loading={submitting}
              label="Send"
            />
          </Box>
        );
      }}
    </Formik>
  );
};
