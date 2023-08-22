import React from 'react';

import { Flex, Button } from 'components';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { InputElement, SubmitElement } from 'components';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(''),
});

const RegisterForm = () => {
  return (
    <Flex flexDirection="column">
      <Formik
        initialValues={{}}
        validateOnMount
        onSubmit={() => {}}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            <InputElement
              formik={formik}
              label="First Name"
              name="email"
              type="text"
            />
            <InputElement
              formik={formik}
              label="Password"
              name="password"
              type="password"
            />
            <InputElement
              formik={formik}
              label="Email"
              name="email"
              type="text"
            />
            <InputElement
              formik={formik}
              label="Password"
              name="password"
              type="password"
            />
            <InputElement
              formik={formik}
              label="Email"
              name="email"
              type="text"
            />
            <InputElement
              formik={formik}
              label="Password"
              name="password"
              type="password"
            />
            <SubmitElement
              size="medium"
              type="secondary"
              width="100%"
              formik={formik}
              label="SIGN IN"
            />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default RegisterForm;
