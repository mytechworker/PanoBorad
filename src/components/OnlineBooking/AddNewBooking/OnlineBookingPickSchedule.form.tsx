import React from 'react';

import { Box, CheckboxElement, SubmitElement, Flex } from 'components';
import { Formik, Form } from 'formik';
import { FontWrapper } from '../online-booking.style';

type Props = {
  onSubmit: (data: any) => void;
};

export default ({ onSubmit }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        scheduling_for_me: false,
        scheduling_for_someone_else: false,
      }}
      validateOnMount
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <FontWrapper>
            <Form>
              <Flex
                width="76vh"
                alignItems="flex-start"
                minHeight="680px"
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box>
                  <Box
                    border="1px solid #E8E8E8"
                    boxSizing="border-box"
                    borderRadius="8px"
                    margin="0 25px 12px"
                    padding="13px"
                    width="76vh"
                  >
                    <CheckboxElement
                      label="Scheduling for Me "
                      formik={formik}
                      name="scheduling_for_me"
                      noMargin={true}
                      className="text"
                      disabled={formik.values.scheduling_for_someone_else}
                    />
                  </Box>
                  <Box
                    border="1px solid #E8E8E8"
                    boxSizing="border-box"
                    borderRadius="8px"
                    margin="0 25px 12px"
                    padding="13px"
                    width="76vh"
                  >
                    <CheckboxElement
                      label="Scheduling for Someone Else"
                      formik={formik}
                      name="scheduling_for_someone_else"
                      noMargin={true}
                      className="text"
                      disabled={formik.values.scheduling_for_me}
                    />
                  </Box>
                </Box>
                <Box minWidth="177px">
                  <SubmitElement
                    formik={formik}
                    label="Confirm"
                    margin="25px"
                    width="100%"
                    disabled={
                      !formik.values.scheduling_for_me &&
                      !formik.values.scheduling_for_someone_else
                    }
                  />
                </Box>
              </Flex>
            </Form>
          </FontWrapper>
        );
      }}
    </Formik>
  );
};
