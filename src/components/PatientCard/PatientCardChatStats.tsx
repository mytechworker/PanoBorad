import React, { useState } from 'react';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';

import { TagModel, PatientVisitModel } from 'types';
import { pipelineSelector, appSelector } from 'redux/selectors';
import {
  Box,
  Flex,
  Text,
  PatientCardContactedList,
  PatientCardTagModal,
} from 'components';
import { DateRangeIcon, TimerIcon } from 'helpers/icons';
import { CloseOutlined } from '@ant-design/icons';
type Props = {
  tags?: TagModel[];
  length?: number;
  visitData?: PatientVisitModel;
  status: any;
  lastContact: any;
  onClickTag?: any;
  onDeleteTag?: any;
  pipeline_name?: any;
};
const PatientCardChatStats = ({
  tags,
  length,
  visitData,
  status,
  lastContact,
  onClickTag,
  onDeleteTag,
  pipeline_name,
}: Props) => {
  const { data: tagListData, fetching } = useSelector(
    pipelineSelector.selectTags
  );

  const [visibleTag, setVisibleTag] = useState(false);
  const [count, setCount] = useState(3);
  const location = useSelector(appSelector.selectLocationInfo);
  const assignStatusColor = (status: string) => {
    let colors = {
      color: '',
      backColor: '',
    };
    if (status === 'NEW') {
      colors.color = 'primary';
      colors.backColor = 'blue4';
    } else if (status === 'ACTIVE') {
      colors.color = 'green2';
      colors.backColor = 'green5';
    } else if (status === 'NON_PATIENT') {
      colors.color = 'pik1';
      colors.backColor = 'pink2';
    } else if (status === 'INACTIVE') {
      colors.color = 'red2';
      colors.backColor = 'red3';
    } else {
      colors.color = 'white';
      colors.backColor = 'purple2';
    }
    return colors;
  };
  const displayPipeLineName = (pipeline_name: number) => {
    if (pipeline_name === 1) {
      return 'unscheduled hygiene reappointment';
    } else if (pipeline_name === 2) {
      return 'unscheduled treatment';
    } else if (pipeline_name === 3) {
      return 'no need follow up';
    } else {
      return 'unscheduled hygiene reappointment and unscheduled treatment';
    }
  };

  return (
    <>
      <PatientCardTagModal
        visible={visibleTag}
        onCancel={() => setVisibleTag(false)}
        tags={tagListData?.data}
        onClickTag={onClickTag}
        selectedTags={tags}
      />
      <Flex
        margin="20px 0"
        padding="13px 18px"
        justifyContent="flex-start"
        background="gray12"
      >
        <Flex
          width="34px"
          minWidth="34px"
          height="34px"
          background="primary"
          borderRadius="50%"
          marginRight="14px"
        />
        <Text weight="700" fontSize="14px" color="gray8" transform="capitalize">
          {displayPipeLineName(+pipeline_name)}
        </Text>
      </Flex>
      <Box padding="20px 0" borderBottom="1px solid" borderColor="gray2">
        <Text
          as={Box}
          weight="700"
          fontSize="14px"
          color="black2"
          marginBottom="14px"
        >
          Status
        </Text>
        <Flex
          justifyContent="flex-start"
          flexGap="10px"
          width="100%"
          flexWrap="wrap"
        >
          {status && (
            <Box
              padding="5px 19px"
              background={assignStatusColor(status).backColor}
            >
              <Text
                weight="700"
                fontSize="14px"
                color={assignStatusColor(status).color}
              >
                {status}
              </Text>
            </Box>
          )}
        </Flex>
      </Box>
      <Box padding="20px 0" borderBottom="1px solid" borderColor="gray2">
        <Text
          as={Box}
          weight="700"
          fontSize="14px"
          color="black2"
          marginBottom="14px"
          onClick={() => setVisibleTag(true)}
          className="has-cursor"
        >
          {`Tags +`}
        </Text>
        <Flex
          justifyContent="flex-start"
          flexGap="10px"
          width="100%"
          flexWrap="wrap"
        >
          {tags?.slice(0, count).map((tag) => {
            return (
              <Flex key={tag.pk}>
                <Box padding="5px 19px" background="orange3">
                  <Text weight="700" fontSize="14px" color={tag.color}>
                    {tag.title}
                  </Text>
                </Box>
                <CloseOutlined
                  onClick={() => onDeleteTag(tag?.pk)}
                  className="has-cursor"
                />
              </Flex>
            );
          })}
          {length && length > 3 && count === 3 ? (
            <Box>
              <Text
                weight="400"
                fontSize="14px"
                color="gray8"
                className="has-cursor"
                onClick={() => setCount(length)}
              >
                + {length - count} more
              </Text>
            </Box>
          ) : null}
          {length && length > 3 && count > 3 ? (
            <Box>
              <Text
                weight="400"
                fontSize="14px"
                color="gray8"
                className="has-cursor"
                onClick={() => setCount(3)}
              >
                show less
              </Text>
            </Box>
          ) : null}
        </Flex>
      </Box>
      <Box padding="20px 0">
        <Text
          as={Box}
          weight="700"
          fontSize="14px"
          color="black2"
          marginBottom="14px"
        >
          Last time Contacted
        </Text>
        <Flex justifyContent="flex-start">
          <Flex marginRight="30px">
            <DateRangeIcon />
            {lastContact && (
              <Text
                marginLeft="4px"
                as={Box}
                weight="700"
                fontSize="12px"
                color="gray8"
              >
                {location?.location_timezone &&
                  moment
                    .tz(lastContact, location?.location_timezone)
                    .format('DD MMM YYYY')}
              </Text>
            )}
          </Flex>
          <Flex>
            <TimerIcon />
            {lastContact && (
              <Text
                marginLeft="4px"
                as={Box}
                weight="700"
                fontSize="12px"
                color="gray8"
              >
                {location?.location_timezone &&
                  moment
                    .tz(lastContact, location?.location_timezone)
                    .format('hh:mm a')}
              </Text>
            )}
          </Flex>
        </Flex>
        <PatientCardContactedList data={visitData} />
      </Box>
    </>
  );
};

export default PatientCardChatStats;
