import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import {
  Box,
  Flex,
  InputElement,
  SubmitElement,
  Title5,
  SpinnerView,
} from 'components';

const validationSchema = yup.object().shape({
  client_id: yup.string().required('No Client Id provided'),
  client_secret: yup.string().required('No Client Secret provided'),
});

type Props = {
  onSubmit: (body: any) => void;
  fielderrors?: any;
  submitting: boolean;
};

export default ({ onSubmit, fielderrors, submitting }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{}}
      validateOnMount
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <Box minWidth="396px">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                marginLeft="0px"
                marginBottom="10px"
              >
                <Box>
                  <Title5>Dentrixascend Connection</Title5>
                </Box>
              </Flex>
              <Box width="100%">
                <InputElement
                  formik={formik}
                  label="Client ID"
                  name="client_id"
                  type="text"
                  placeholder="Client ID"
                  // fielderror={fielderrors?.currentPassword}
                />
                <InputElement
                  formik={formik}
                  label="Client Secret"
                  name="client_secret"
                  type="password"
                  placeholder="Client Secret"
                  // fielderror={fielderrors?.currentPassword}
                />
                <Flex marginTop="10px" width="100%">
                  <SubmitElement
                    size="medium"
                    type="secondary"
                    shape="fill"
                    formik={formik}
                    loading={submitting}
                    label="Search"
                  />
                </Flex>
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
