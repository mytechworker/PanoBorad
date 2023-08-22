import React from 'react';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';
import { PatientVisitModel } from 'types';
import { Flex, Grid, Text } from 'components';
import { DateRangeIcon, ListIcon, PaymentIcon } from 'helpers/icons';
type Props = {
  data?: PatientVisitModel;
};
const PatientCardContactedList = ({ data }: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);
  return (
    <Grid gridGap="12px" marginTop="30px">
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="blue5"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <DateRangeIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              Last Visit
            </Text>
            <Text weight="600" fontSize="14px" color="black2" lineHeight="18px">
              Type: {data?.last_visit_type}
            </Text>
          </Flex>
        </Flex>
        {data && data?.last_visit && (
          <Text weight="700" fontSize="14px" color="black2">
            {location?.location_timezone &&
              moment
                .tz(data?.last_visit, location?.location_timezone)
                .format('DD MMM YYYY')}
          </Text>
        )}
      </Flex>
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="blue6"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <DateRangeIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              Next Visit
            </Text>
            <Text weight="600" fontSize="14px" color="black2" lineHeight="18px">
              Type: {data?.next_visit_type}
            </Text>
          </Flex>
        </Flex>
        <Text weight="700" fontSize="14px" color="black2">
          {data && data?.next_visit && (
            <Text weight="700" fontSize="14px" color="black2">
              {location?.location_timezone &&
                moment
                  .tz(data?.next_visit, location?.location_timezone)
                  .format('DD MMM YYYY')}
            </Text>
          )}
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="red4"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <ListIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              Hygiene Due
            </Text>
            <Text weight="600" fontSize="14px" color="black2" lineHeight="18px">
              Unscheduled
            </Text>
          </Flex>
        </Flex>
        <Text weight="700" fontSize="14px" color="red4">
          -
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="orange4"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <PaymentIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              AR Balance
            </Text>
          </Flex>
        </Flex>
        <Text weight="700" fontSize="14px" color="black2">
          $1
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="green6"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <PaymentIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              Remaining Insurance
            </Text>
          </Flex>
        </Flex>
        <Text weight="700" fontSize="14px" color="black2">
          -
        </Text>
      </Flex>
      <Flex
        justifyContent="space-between"
        padding="16px 20px"
        background="gray12"
      >
        <Flex>
          <Flex
            marginRight="12px"
            background="pink2"
            width="34px"
            height="34px"
            borderRadius="50%"
          >
            <PaymentIcon color="white" />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-start"
            flexDirection="column"
            flexGap="4px"
          >
            <Text weight="700" fontSize="14px" color="gray8" lineHeight="18px">
              Treatment Plan
            </Text>
          </Flex>
        </Flex>
        <Text weight="700" fontSize="14px" color="black2">
          $4,650
        </Text>
      </Flex>
    </Grid>
  );
};

export default PatientCardContactedList;
