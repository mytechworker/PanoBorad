import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Tabs } from 'antd';
import { QuestionCircleFilled } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { MediaResponse, User as UserModel } from 'types';
import {
  Box,
  Text,
  Flex,
  InputElement,
  SubmitElement,
  SwitchElement,
  UploadImage,
  SelectElement,
  Grid,
  RemoveImage,
} from 'components';
import { managementSelector } from 'redux/selectors';
import Avatar from 'assets/images/avatar.png';
import CloseIcon2 from 'assets/images/Close-icon-n2.svg';

import {
  AvatarFormWrapper,
  UploadWrapper,
  TitleWrapper,
  RemoveWrapper,
} from './shared.styles';

const { TabPane } = Tabs;

type Props = {
  onSubmit: (data: any) => void;
  onRemoveImage: (data: any) => void;
  permissionsList: any;
  addMode: boolean;
  userInfo: UserModel;
  locationsList: any;
};

export default ({
  onSubmit,
  permissionsList,
  addMode,
  userInfo,
  locationsList,
  onRemoveImage,
}: Props): JSX.Element => {
  const { data: userRoles, fetching } = useSelector(
    managementSelector.selectRoles
  );

  const validationSchema = addMode
    ? yup.object().shape({
        email: yup
          .string()
          .email('Enter a valid email')
          .required('No Email provided'),
        password: yup.string().required('No Password provided'),
        permissions: yup
          .array()
          .min(1)
          .required('Choose at least one item of permission'),
      })
    : yup.object().shape({
        email: yup
          .string()
          .email('Enter a valid email')
          .required('No Email provided'),
        permissions: yup
          .array()
          .min(1)
          .required('Choose at least one item of permission'),
      });
  const locations: string[] = userInfo
    ? userInfo.locations.map((location) => location.pk)
    : [];
  const [imageInfo, setImageInfo] = useState<MediaResponse>();
  useEffect(() => {
    setImageInfo(imageInfo);
  }, [imageInfo]);

  return (
    <Formik
      initialValues={{
        first_name: addMode ? '' : userInfo?.first_name,
        last_name: addMode ? '' : userInfo?.last_name,
        phone_number: addMode ? '' : userInfo?.phone_number,
        phone_number_extension: addMode ? '' : userInfo?.phone_number_extension,
        email: addMode ? '' : userInfo?.email,
        role: addMode ? null : userInfo?.role,
        permissions: addMode ? [] : userInfo?.permissions,
        password: '',
        locations: addMode ? [] : locations,
      }}
      validateOnMount
      onSubmit={(body: any) => {
        onSubmit({
          ...body,
          photo: imageInfo?.pk,
        });
      }}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Box as={Form}>
            <Tabs
              defaultActiveKey="user-info"
              tabPosition="left"
              className="modal-tab"
            >
              <TabPane
                tab={<span className="modal-tab">User Info</span>}
                key="user-info"
              >
                <Box padding="0 15px">
                  <Flex
                    flexDirection="row"
                    justifyContent="flex-start"
                    marginLeft="0px"
                    marginBottom="10px"
                  >
                    <Box>
                      <Flex flexDirection="row">
                        <AvatarFormWrapper>
                          {userInfo?.photo?.media ? (
                            <img
                              src={
                                imageInfo?.media ??
                                process.env.REACT_APP_BASE_URL +
                                  userInfo?.photo?.media
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
                          {userInfo?.photo?.media && (
                            <RemoveWrapper>
                              <Box
                                className="close-icon"
                                onClick={() =>
                                  onRemoveImage({
                                    ...formik.values,
                                    photo: null,
                                  })
                                }
                              >
                                <img src={CloseIcon2} alt="close_icon" />
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
                                {userInfo?.photo?.media && (
                                  <RemoveImage
                                    onRemovePhoto={() =>
                                      onRemoveImage({
                                        ...formik.values,
                                        photo: null,
                                      })
                                    }
                                  />
                                )}
                              </Flex>
                            </Box>
                            <Text className="upload-text" margin="20px">
                              The proposed size is 512*512px no bigger than
                              2.5mb
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
                          placeholder=""
                        />
                      </Box>
                      <Box margin="0 0 0 15px">
                        <InputElement
                          formik={formik}
                          label="Etxension"
                          name="phone_number_extension"
                          type="number"
                          placeholder=""
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
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </TabPane>
              <TabPane
                tab={<span>User Permissions & Role</span>}
                key="permission-role"
              >
                <TitleWrapper>
                  <Text className="employee-modal-title">
                    User Permissions
                    <QuestionCircleFilled />
                  </Text>
                </TitleWrapper>

                <Grid
                  marginTop="10px"
                  marginBottom="20px"
                  borderBottom="1px solid"
                  borderColor="gray2"
                  gridTemplateColumns="1fr 1fr"
                  gridGap="0 70px"
                >
                  {permissionsList.map((permission: any, index: any) => (
                    <Box key={permission.title}>
                      <SwitchElement
                        defaultChecked={
                          userInfo?.permissions?.indexOf(permission.number) >
                            -1 && !addMode
                        }
                        formik={formik}
                        name={permission.number}
                        label={permission.title}
                      />
                    </Box>
                  ))}
                </Grid>
                <Box width="100%">
                  <SelectElement
                    formik={formik}
                    label="User Role"
                    name="role"
                    placeholder="User Role"
                    loading={fetching}
                    options={userRoles?.map((role) => ({
                      title: role.title,
                      key: role.number,
                    }))}
                  />
                  <SelectElement
                    formik={formik}
                    label="Locations"
                    name="locations"
                    mode="multiple"
                    placeholder="Select Location"
                    options={[
                      ...locationsList.map((location: any) => ({
                        key: location.pk,
                        title: location.title,
                      })),
                    ]}
                  />
                </Box>
              </TabPane>
            </Tabs>
            <Flex justifyContent="flex-end">
              <SubmitElement
                size="medium"
                type="secondary"
                shape="fill"
                formik={formik}
                loading={false}
                label={addMode ? 'Add Employee' : 'Update Employee'}
              />
            </Flex>
          </Box>
        );
      }}
    </Formik>
  );
};
