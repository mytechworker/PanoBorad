import React from 'react';
import { Formik, Form } from 'formik';
import { Box, RadioElement, Flex, SubmitElement, Title5 } from 'components';
import { FontWrapper } from '../setting.styles';

type Props = {
  onSubmit: (body: any) => void;
  submitting: boolean;
};

export default ({ onSubmit, submitting }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        account_status: 'have_account',
      }}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <FontWrapper>
            <Form>
              <Box height="300px">
                <Flex flexDirection="row" justifyContent="space-between">
                  <Box>
                    <Title5>Twilio Connection</Title5>
                  </Box>
                </Flex>
                <Box padding="60px 26px">
                  <RadioElement
                    formik={formik}
                    name="account_status"
                    options={[
                      {
                        key: 'have_account',
                        title: 'I have a Twilio Account',
                      },
                      {
                        key: 'new_account',
                        title:
                          'Don’t have Twilio account? We create it for you.',
                      },
                    ]}
                  />
                </Box>

                <Flex>
                  <Box>
                    <SubmitElement
                      size="medium"
                      type="secondary"
                      shape="fill"
                      formik={formik}
                      label="Next"
                      width="120px"
                      loading={submitting}
                    />
                  </Box>
                </Flex>
              </Box>
            </Form>
          </FontWrapper>
        );
      }}
    </Formik>
  );
};
