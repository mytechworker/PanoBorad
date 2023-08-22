import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { CopyOutlined } from '@ant-design/icons';
import { notification } from 'antd';

import {
  Box,
  Flex,
  InputElement,
  RemoveImage,
  SelectElement,
  SubmitElement,
  Text,
  Title5,
  UploadImage,
} from 'components';
import {
  ClipboardWrapper,
  LogoFormWrapper,
  RemoveWrapper,
  UploadWrapper,
} from './practice.style';
import CompanyLogo from 'assets/images/companyLogo.png';
import { MediaResponse } from 'types';
import { useSelector } from 'react-redux';
import { locationSelector } from 'redux/selectors';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CloseIcon2 from 'assets/images/Close-icon-n2.svg';

export default ({
  practiceInfo,
  onSubmit,
  submitting,
  onDeleteImage,
}: any): JSX.Element => {
  const { data: statesList, fetching } = useSelector(
    locationSelector.selectStates
  );
  const validationSchema = yup.object().shape({
    email: yup.string().nullable().email('Enter a valid email'),
    title: yup.string().required('No title provided'),
    address: yup.string().required('No address provided'),
    state: yup.string().required('No state provided'),
  });

  const [imageInfo, setImageInfo] = useState<MediaResponse>();
  useEffect(() => {
    setImageInfo(imageInfo);
  }, [imageInfo]);

  const handleCopy = () => {
    notification.success({
      message: 'Copied to clipboard!',
    });
  };

  return (
    <Formik
      initialValues={{
        title: practiceInfo?.title,
        address: practiceInfo?.address,
        city: practiceInfo?.city,
        email: practiceInfo?.email,
        location_timezone: practiceInfo?.location_timezone
          ? practiceInfo?.location_timezone
          : null,
        state: practiceInfo?.state,
        country: practiceInfo?.country ? Number(practiceInfo?.country) : 1,
        website: practiceInfo?.website,
        phone_number: practiceInfo?.phone_number,
        patient_booking_url: practiceInfo?.patient_booking_url,
      }}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={({
        title,
        address,
        city,
        email,
        location_timezone,
        state,
        country,
        website,
        phone_number,
      }) => {
        const body = {
          title,
          address,
          city,
          email,
          state,
          website,
          phone_number,
        };

        onSubmit({
          title,
          address,
          city,
          email,
          // location_timezone,
          state,
          // country,
          website,
          phone_number,
          logo: imageInfo ? imageInfo?.pk : practiceInfo?.logo?.pk,
        });
      }}
    >
      {(formik) => {
        return (
          <Box as={Form} padding="0 51px">
            <Box>
              <Title5
                style={{
                  fontSize: '18px',
                  weight: 'bold',
                  margin: '20px 0 0 -30px',
                }}
              >
                Practice Data
              </Title5>
            </Box>
            <Flex
              flexDirection="row"
              justifyContent="flex-start"
              marginLeft="0px"
              marginBottom="10px"
            >
              <Flex flexDirection="row">
                <LogoFormWrapper>
                  <img
                    src={
                      imageInfo?.media
                        ? imageInfo?.media
                        : practiceInfo?.logo?.media
                        ? process.env.REACT_APP_BASE_URL +
                          practiceInfo?.logo?.media
                        : CompanyLogo
                    }
                    alt="Practice Logo"
                  />
                </LogoFormWrapper>
                <Flex
                  flexDirection="column"
                  alignItems="flex-start"
                  marginLeft="10px"
                >
                  {practiceInfo?.logo?.media && (
                    <RemoveWrapper>
                      <Box
                        className="close-icon"
                        onClick={() =>
                          onDeleteImage({ logo: null, ...formik.values })
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
                        {practiceInfo?.logo?.media && (
                          <RemoveImage
                            onRemovePhoto={() =>
                              onDeleteImage({ logo: null, ...formik.values })
                            }
                          />
                        )}
                      </Flex>
                    </Box>
                    <Text className="upload-text">
                      The proposed size is 350px * 180px no bigger than 2.5mb
                    </Text>
                  </UploadWrapper>
                </Flex>
              </Flex>
            </Flex>
            <Box>
              <Flex flexDirection="row" justifyContent="space-between">
                <Box width="620px">
                  <InputElement
                    formik={formik}
                    label="Company Name"
                    name="title"
                    type="text"
                    placeholder="Company Name"
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="space-between">
                <Box width="620px">
                  <InputElement
                    formik={formik}
                    label="Company Email Address"
                    name="email"
                    type="text"
                    placeholder="Company Email"
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="620px">
                  <InputElement
                    formik={formik}
                    label="Company Phone Number"
                    name="phone_number"
                    type="number"
                    placeholder="Company Phone Number"
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="space-between">
                <Box width="620px">
                  <InputElement
                    formik={formik}
                    label="Company Website"
                    name="website"
                    type="text"
                    placeholder="Company Website"
                  />
                </Box>
              </Flex>

              <Box marginBottom="8px">
                <Text fontSize="14px" color="gray8">
                  Patient Booking URL
                </Text>
              </Box>
              <Box
                width="620px"
                widthT="100%"
                border="1px solid #DADADA"
                borderRadius="5px"
                background="gray12"
              >
                <Flex flexDirection="culomn" justifyContent="space-between">
                  <Box
                    onClick={() =>
                      window.open(practiceInfo?.patient_booking_url, '_blanked')
                    }
                  >
                    <Text padding="12px" weight="700" fontSize="14px">
                      <a>{practiceInfo?.patient_booking_url}</a>
                    </Text>
                  </Box>
                  <CopyToClipboard
                    text={practiceInfo?.patient_booking_url}
                    onCopy={handleCopy}
                  >
                    <ClipboardWrapper>
                      <CopyOutlined />
                    </ClipboardWrapper>
                  </CopyToClipboard>
                </Flex>
              </Box>
            </Box>
            <Box marginTop="40px" border="1px solid" borderColor="gray2" />
            <Box margin="20px 0">
              <Title5 fontSize="18px" weight="bold">
                Practice Address
              </Title5>
            </Box>
            <Box width="100%">
              <Flex flexDirection="row" justifyContent="space-between">
                <Box width="620px">
                  <InputElement
                    formik={formik}
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Address"
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="300px">
                  <InputElement
                    formik={formik}
                    label="City"
                    name="city"
                    type="text"
                    placeholder="City"
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="space-between">
                <Box minWidth="620px" widthT="100%">
                  <SelectElement
                    formik={formik}
                    label="Country"
                    name="country"
                    placeholder="Country"
                    options={[{ title: 'United States', key: 1 }]}
                  />
                </Box>
              </Flex>
              <Flex flexDirection="row" justifyContent="flex-start">
                <Box width="620px">
                  <SelectElement
                    formik={formik}
                    label="State / Prov / Region *"
                    name="state"
                    placeholder="State / Prov / Region *"
                    loading={fetching}
                    options={
                      statesList && statesList.length > 0
                        ? statesList.map((state) => ({
                            title: state,
                            key: state,
                          }))
                        : []
                    }
                  />
                </Box>
              </Flex>

              <Box marginBottom="8px">
                <Text fontSize="14px" color="gray8">
                  Time Zone
                </Text>
              </Box>
              <Box
                width="620px"
                widthT="100%"
                border="1px solid #DADADA"
                borderRadius="5px"
                background="gray12"
              >
                <Text padding="12px" weight="700" fontSize="14px">
                  {practiceInfo?.location_timezone}
                </Text>
              </Box>

              <Flex justifyContent="flex-start" fontSize="30px">
                <Box margin="46px 0 102px 0">
                  <SubmitElement
                    size="medium"
                    type="secondary"
                    shape="fill"
                    width="217px"
                    formik={formik}
                    loading={submitting}
                    label="Update"
                  />
                </Box>
              </Flex>
            </Box>
          </Box>
        );
      }}
    </Formik>
  );
};
