import React from 'react';
import { Formik, Form, Field } from 'formik';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { StyleWrapper } from './EmailSignature.style';

import {
  Box,
  Button,
  CheckboxElement,
  Flex,
  TextEditorElement,
} from 'components';

export default ({}) => {
  return (
    <Formik
      initialValues={{
        signature: '',
      }}
      validateOnMount
      onSubmit={() => {}}
    >
      {(formik) => {
        return (
          <StyleWrapper>
            <Box padding="40px">
              <Form>
                <Flex justifyContent="flex-start">
                  <Box marginRight="40px">
                    <CheckboxElement
                      label="Enable Signature on All Outgoing Messages"
                      formik={formik}
                      name="outgoing_messages"
                      noMargin={true}
                      className="font-style"
                    />
                  </Box>
                  <Box>
                    <CheckboxElement
                      label="Include this signature before quoted text in replies"
                      formik={formik}
                      name="in_replies"
                      noMargin={true}
                      className="font-style"
                    />
                  </Box>
                </Flex>
                <Box marginTop="42px">
                  <TextEditorElement
                    name="signature"
                    value={formik.values.signature}
                    formik={formik}
                  />
                </Box>
                <Box marginTop="30px">
                  <Button width="122px">Save</Button>
                </Box>
              </Form>
            </Box>
          </StyleWrapper>
        );
      }}
    </Formik>
  );
};
