import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { UploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';

import {
  Box,
  Text,
  Flex,
  UploadImage,
  RemoveImage,
  InputElement,
  SubmitElement,
  Title5,
} from 'components';
import { MediaResponse } from 'types';

import Avatar from 'assets/images/avatar.png';
import CloseIcon2 from 'assets/images/Close-icon-n2.svg';

import {
  AvatarFormWrapper,
  RemoveWrapper,
  UploadWrapper,
} from './profile.style';

export default ({
  onSubmit,
  fielderrors,
  onDeleteImage,
  submitting,
  profileInfo,
}: any): JSX.Element => {
  const [imageInfo, setImageInfo] = useState<MediaResponse>();
  useEffect(() => {
    setImageInfo(imageInfo);
  }, [imageInfo]);
  return (
    <Formik
      initialValues={{
        first_name: profileInfo?.first_name,
        last_name: profileInfo?.last_name,
        email: profileInfo?.email,
        phone_number: profileInfo?.phone_number,
        phone_number_extension: profileInfo?.phone_number_extension,
      }}
      validateOnMount
      onSubmit={({
        first_name,
        last_name,
        email,
        phone_number,
        phone_number_extension,
      }) =>
        onSubmit({
          first_name,
          last_name,
          email,
          phone_number,
          phone_number_extension,
          photo: imageInfo?.pk,
        })
      }
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
                <Title5 marginBottom="22px">Personal Info</Title5>
                <Flex flexDirection="row">
                  <AvatarFormWrapper>
                    {profileInfo?.photo?.media ? (
                      <img
                        src={
                          imageInfo?.media ??
                          process.env.REACT_APP_BASE_URL +
                            profileInfo?.photo?.media
                        }
                        alt=""
                      />
                    ) : (
                      <img src={imageInfo?.media ?? Avatar} alt="" />
                    )}
                  </AvatarFormWrapper>
                  <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    marginLeft="20px"
                  >
                    {profileInfo?.photo?.media && (
                      <RemoveWrapper>
                        <Box
                          className="close-icon"
                          onClick={() =>
                            onDeleteImage({ ...formik.values, photo: null })
                          }
                        >
                          <img
                            src={CloseIcon2}
                            alt="close_icon
                      "
                          />
                        </Box>
                      </RemoveWrapper>
                    )}

                    <UploadWrapper>
                      <Box>
                        <Flex
                          flexDirection="row"
                          justifyContent="flex-start"
                          flexGap="9px"
                        >
                          <UploadImage
                            onSuccessUpload={(info: MediaResponse) =>
                              setImageInfo(info)
                            }
                          />
                          {profileInfo?.photo?.media && (
                            <RemoveImage
                              onRemovePhoto={() =>
                                onDeleteImage({ ...formik.values, photo: null })
                              }
                            />
                          )}
                        </Flex>
                      </Box>

                      <Text className="upload-text" margin="20px">
                        The proposed size is 350px * 180px no bigger than 2.5mb
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
                  />
                </Box>
                <Box margin="0 0 0 15px">
                  <InputElement
                    formik={formik}
                    label="Last Name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
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
                    placeholder="Phone Number"
                  />
                </Box>
                <Box margin="0 0 0 15px">
                  <InputElement
                    formik={formik}
                    label="Etxension"
                    name="phone_number_extension"
                    type="number"
                    placeholder="Extension"
                  />
                </Box>
              </Flex>
              <Flex justifyContent="flex-start" marginTop="10px">
                <SubmitElement
                  size="medium"
                  type="secondary"
                  shape="fill"
                  formik={formik}
                  loading={submitting}
                  label="Update Profile"
                />
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
