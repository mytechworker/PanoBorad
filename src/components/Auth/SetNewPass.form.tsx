import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box, InputElement, SubmitElement } from 'components';

// Form Validations
const validationSchema = yup.object().shape({
  new_password: yup.string().required('No password provided'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('new_password'), null], 'Passwords must match'),
});

type Props = {
  onSubmit: (password: string) => void;
  fielderrors?: any;
  submitting: boolean;
};
export default ({ onSubmit, fielderrors, submitting }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{ new_password: '' }}
      validateOnMount
      onSubmit={({ new_password }) => onSubmit(new_password)}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Box width="100%" as={Form} className="security-verification-form">
            <Box className="password-input" margin="0 0 30px">
              <InputElement
                formik={formik}
                label="New password"
                name="new_password"
                type="password"
                placeholder="Password"
                fielderror={fielderrors?.newPassword}
              />
            </Box>
            <Box width="100%" margin="0 0 56px">
              <InputElement
                formik={formik}
                label="Confirm Password"
                name="passwordConfirmation"
                type="password"
                placeholder="Password"
                fielderror={fielderrors?.passwordConfirmation}
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
