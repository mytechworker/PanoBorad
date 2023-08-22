import React from 'react';
import moment from 'moment';
import { NoteModel } from 'types';
import { Flex, Box, Text } from 'components';
import { AssignmentIcon } from 'helpers/icons';
type Props = {
  note?: NoteModel;
};
const PatientCardNoteItem = ({ note }: Props) => {
  let dayNumber = moment(note?.created_at).day();
  return (
    <Flex alignItems="flex-start" marginBottom="15px" justifyContent="end">
      <Flex
        border="2px solid"
        borderColor="primary"
        background="white"
        width="28px"
        minWidth="28px"
        height="28px"
        borderRadius="50%"
        marginRight="10px"
        marginTop="15px"
      >
        <AssignmentIcon color="gray8" />
      </Flex>
      <Box>
        <Text marginBottom="5px" weight="600" color="gray8" lineHeight="15px">
          {moment()
            .day(dayNumber)
            .format('dddd')}
          , {moment(note?.created_at).format('hh:mm a')}
        </Text>
        <Box marginBottom="10px">
          <Text weight="600" color="gray8" lineHeight="16px">
            <Text weight="700" color="primary" lineHeight="16px">
              {note?.author}
            </Text>{' '}
          </Text>
        </Box>
        <Box shadow="0px 0px 14px rgba(0, 0, 0, 0.05)" padding="8px 10px">
          <Text>{note?.note}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default PatientCardNoteItem;
