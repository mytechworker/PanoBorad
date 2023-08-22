import React, { useState, useEffect } from 'react';
import 'react-phone-number-input/style.css';
import { get } from 'lodash';
import { NumberModel } from 'types';
import { useSelector } from 'react-redux';
import { usePromise } from 'hooks';
import { phoneNumberAction, conversationAction } from 'redux/actions';
import {
  phoneNumberSelector,
  conversationSelector,
  appSelector,
} from 'redux/selectors';
import { Text, Flex, Title5, Button, Box } from 'components';
import { Select } from 'antd';
import { SelectPhoneNumberWrapper, InputWrapper } from './conversation.style';
import { Modal, Radio, Space, Input } from 'antd';
import PhoneInput from 'react-phone-number-input/input';
type Props = {
  visible?: boolean;
  handleCancel: () => void;
  reloadPatient: (patiendId?: any, phoneNumberId?: any) => void;
};
const { Option } = Select;
const { TextArea } = Input;
const ConversationNewChatModal = ({
  visible,
  handleCancel,
  reloadPatient,
}: Props) => {
  const promise = usePromise();
  const { data: numbers } = useSelector(conversationSelector.selectNumbersList);
  const locationInfo = useSelector(appSelector.selectLocationInfo);
  const { data: phoneNumbers } = useSelector(
    phoneNumberSelector.selectPhoneNumberList
  );
  useEffect(() => {
    promise(
      conversationAction.loadConversationNumbers({
        location_id: locationInfo?.pk,
      })
    ).then((res: any) => {
      setOptions(res);
    });
  }, []);
  const [options, setOptions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [type, setType] = useState(1);
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [patientNumber, setPatientNumber] = useState('');
  const [text, setText] = useState('');
  const [patientName, setPatientName] = useState<NumberModel>();
  const phoneNumberList = get(phoneNumbers, 'data', []);
  const [value, setValue] = useState('');
  const onSearch = (searchText: string) => {
    setIsSearching(true);
    promise(
      conversationAction.loadConversationNumbers({
        location_id: locationInfo?.pk,
        search: searchText,
      })
    )
      .then((res: any) => {
        setOptions(res);
      })
      .finally(() => {
        setIsSearching(false);
      });
  };
  const onClear = () => {
    setOptions(numbers);
  };
  const onCreateSms = () => {
    setLoading(true);
    promise(
      phoneNumberAction.createSMS(
        phoneNumber,
        type === 1
          ? {
              patient_number: patientNumber,
              body: text,
            }
          : +patientNumber > 0
          ? {
              patient_number: patientNumber,
              body: text,
            }
          : {
              number: number,
              body: text,
            }
      )
    )
      .then((response: any) => {
        setText('');
        setPhoneNumber('');
        setNumber('');
        setType(1);
        setPatientName(undefined);
        reloadPatient(response.patient_number, response.pk);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onSearchName = (searchText: string) => {
    promise(
      conversationAction.loadConversationNumbers({
        location_id: locationInfo?.pk,
        search: searchText,
      })
    ).then((res: any) => {
      if (res.length > 0) {
        setPatientName(res[0]);
        setPatientNumber(res[0].pk);
      }
    });
  };
  const cancel = () => {
    setText('');
    setPhoneNumber('');
    setNumber('');
    setType(1);
    setPatientName(undefined);
    handleCancel();
  };
  return (
    <Modal
      visible={visible}
      closable={true}
      footer={false}
      centered
      onCancel={cancel}
      destroyOnClose
      width="552px"
    >
      <Title5 marginRight="5px" marginBottom="30px">
        New Conversation
      </Title5>
      <Text color="gray8" weight="700" fontSize="16px" marginBottom="12px">
        Choose number
      </Text>

      <Flex justifyContent="flex-start">
        <SelectPhoneNumberWrapper>
          <Select
            placeholder="Select number"
            onChange={(value: any) => {
              setPhoneNumber(value);
            }}
            value={phoneNumber === '' ? undefined : phoneNumber}
          >
            {phoneNumberList.map((phone: any) => {
              return (
                <Option value={phone.pk} key={phone.pk}>
                  <Text fontSize="11px">{phone.phone_number}</Text>
                </Option>
              );
            })}
          </Select>
        </SelectPhoneNumberWrapper>
      </Flex>

      <Radio.Group
        name="radiogroup"
        defaultValue={type}
        onChange={(e) => setType(e.target.value)}
      >
        <Space direction="vertical">
          <Radio value={1}>
            <Text
              color="gray8"
              weight="700"
              fontSize="16px"
              marginBottom="12px"
            >
              Choose patient
            </Text>
          </Radio>
          <Flex justifyContent="flex-start">
            <Flex justifyContent="flex-start">
              <SelectPhoneNumberWrapper>
                <Select
                  showSearch
                  defaultActiveFirstOption={false}
                  showArrow={false}
                  filterOption={false}
                  placeholder="Select patient"
                  onChange={(value: any) => {
                    setPatientNumber(value);
                  }}
                  onSearch={onSearch}
                  allowClear
                  onClear={onClear}
                  disabled={type === 2}
                  value={patientName?.patient_name}
                  loading={isSearching}
                >
                  {options?.map((number: NumberModel) => {
                    return (
                      <Option value={number.pk} key={number.pk}>
                        <Text fontSize="11px">
                          {number && number.patient_name
                            ? number.patient_name
                            : number.phone_number}
                        </Text>
                      </Option>
                    );
                  })}
                  {isSearching && 'is searching'}
                </Select>
              </SelectPhoneNumberWrapper>
            </Flex>
          </Flex>
          <Radio value={2}>
            <Text
              color="gray8"
              weight="700"
              fontSize="16px"
              marginBottom="12px"
            >
              Add number
            </Text>
          </Radio>
          {/* <div>
            <PhoneInput
              country="US"
              international
              withCountryCallingCode
              value={number}
              onChange={(event: any) => {
                setNumber(event.target.value);
                if (event.target.value.length > 9) {
                  onSearchName(event.target.value);
                }
              }}
              placeholder="Enter patient number"
              disabled={type === 1}
            />
          </div> */}

          {/* <InputWrapper
            as={Input}
            size="large"
            value={number}
            onChange={(event: any) => {
              setNumber(event.target.value);
              if (event.target.value.length > 9) {
                onSearchName(event.target.value);
              }
            }}
            placeholder="Enter patient number"
            disabled={type === 1}
          /> */}
          <Flex>
            <InputWrapper>
              <PhoneInput
                country="US"
                onChange={(value: any) => {
                  setNumber(value);
                  if (value.length > 9) {
                    onSearchName(value);
                  }
                }}
                placeholder="Enter patient number"
                disabled={type === 1}
              />
            </InputWrapper>
          </Flex>
        </Space>
      </Radio.Group>
      <Box marginTop="10px" width="510px">
        <Flex flexDirection="column" justifyContent="flex-end">
          <TextArea
            name="body"
            placeholder="Text"
            rows={5}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Flex>
      </Box>
      <Flex flexDirection="column" alignItems="flex-end" marginTop="20px">
        <Button
          onClick={onCreateSms}
          loading={loading}
          disabled={
            phoneNumber === '' ||
            text === '' ||
            (number === '' && patientNumber == '')
          }
        >
          Confirm
        </Button>
      </Flex>
    </Modal>
  );
};

export default ConversationNewChatModal;
