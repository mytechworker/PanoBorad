import React, { useState } from 'react';
import { get } from 'lodash';
import { useSelector } from 'react-redux';
import { usePromise } from 'hooks';
import { Select, Input } from 'antd';
import { phoneNumberAction } from 'redux/actions';
import { Flex, Text, Title5, Button, Box } from 'components';
import { SelectPhoneNumberWrapper } from './pipeline.style';
import { phoneNumberSelector } from 'redux/selectors';
import { Link } from 'react-router-dom';

type Props = {
  onSubmit: (data: any) => void;
  submitting: boolean;
  patient: any;
};
const { Option } = Select;
const { TextArea } = Input;
export default ({ onSubmit, submitting, patient }: Props): JSX.Element => {
  const promise = usePromise();
  const { data: phoneNumbers, fetching } = useSelector(
    phoneNumberSelector.selectPhoneNumberList
  );
  const phoneNumberList = get(phoneNumbers, 'data', []);
  const [phone, setPhone] = useState('');
  const [step, setStep] = useState(1);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const onCreateSms = () => {
    setLoading(true);
    promise(
      phoneNumberAction.createSMS(phone, {
        patient_number: patient?.number,
        body: text,
      })
    )
      .then(() => {
        setStep(2);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Box>
      {step === 1 && (
        <>
          <Title5 marginBottom="30px">
            Send Message to {patient.full_name}
          </Title5>
          <Flex justifyContent="flex-end">
            <SelectPhoneNumberWrapper>
              <Select
                placeholder="Select phone number"
                onChange={(value: any) => setPhone(value)}
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
          <Box marginBottom="10px">
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

          <Flex justifyContent="flex-end">
            <Button
              disabled={phone === '' || text === ''}
              onClick={onCreateSms}
              loading={loading}
            >
              Send
            </Button>
          </Flex>
        </>
      )}
      {step === 2 && (
        <Box padding="20px">
          <Flex>
            <Text fontSize="14px" marginBottom="20px">
              Your message was successfully sent to {patient.full_name}
            </Text>
          </Flex>
          <Flex>
            <Link
              to={`/conversation?patientId=${patient?.pk}&pk=${patient?.number}`}
            >
              Go to Conversation's {patient.full_name}{' '}
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
