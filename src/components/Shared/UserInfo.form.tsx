import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

import {
  Box,
  Text,
  Flex,
  Button,
  InputElement,
  SubmitElement,
} from 'components';

import Avatar from 'assets/images/avatar.png';

import { AvatarFormWrapper, UploadWrapper } from './shared.styles';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('No Email provided'),
  password: yup.string().required('No password provided'),
});

export default ({ onSubmit, fielderrors, submitting }: any): JSX.Element => {
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
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              marginLeft="0px"
              marginBottom="10px"
            >
              <Box>
                <Flex flexDirection="row">
                  <AvatarFormWrapper>
                    <img src={Avatar} alt="Avatar" />
                  </AvatarFormWrapper>
                  <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    marginLeft="20px"
                  >
                    <UploadWrapper>
                      <Upload>
                        <Button
                          className="upload-wrapper"
                          icon={<UploadOutlined />}
                        >
                          Upload Photo
                        </Button>
                      </Upload>
                      <Text className="upload-text" margin="20px">
                        The proposed size is 512*512px no bigger than 2.5mb
                      </Text>
                    </UploadWrapper>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
            <Box width="100%">
              <Flex flexDirection="row" justifyContent="space-between">
                <Box>
                  <InputElement
                    formik={formik}
                    label="First Name"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    // fielderror={fielderrors?.currentPassword}
                  />
                </Box>
                <Box margin="0 0 0 15px">
                  <InputElement
                    formik={formik}
                    label="Last Name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    // fielderror={fielderrors?.newPassword}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="100%">
                  <InputElement
                    formik={formik}
                    label="Email Address"
                    name="email"
                    type="text"
                    placeholder="user@mail.com"
                    width="100%"
                    // fielderror={fielderrors?.currentPassword}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="space-between">
                <Box minWidth="339px">
                  <InputElement
                    formik={formik}
                    label="Phone Number"
                    name="phone_number"
                    type="number"
                    placeholder=""
                    // fielderror={fielderrors?.currentPassword}
                  />
                </Box>
                <Box margin="0 0 0 15px">
                  <InputElement
                    formik={formik}
                    label="Etxension"
                    name="phone_number_extension"
                    type="number"
                    placeholder=""
                    // fielderror={fielderrors?.currentPassword}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row">
                <Box width="100% ">
                  <InputElement
                    formik={formik}
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    // fielderror={fielderrors?.currentPassword}
                  />
                </Box>
              </Flex>
              <Flex justifyContent="flex-end">
                <SubmitElement
                  size="medium"
                  type="secondary"
                  shape="fill"
                  formik={formik}
                  loading={submitting}
                  label="Save"
                />
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
