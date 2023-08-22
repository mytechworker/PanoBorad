import React, { useState } from 'react';
import moment from 'moment';
import { pipelineAction } from 'redux/actions';
import { usePromise } from 'hooks';
import { NoteModel } from 'types';
import { Box, Text, PatientCardNoteItem, Flex, SpinnerView } from 'components';
import { TrashIcon } from 'helpers/icons';

import { NotesWrapper } from './patient-card.styles';
type Props = {
  notes?: NoteModel[];
  reloadPatient: () => void;
};
const PatientCardNotes = ({ notes, reloadPatient }: Props) => {
  const promise = usePromise();
  const [deletting, setDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const onDelete = (id: number) => {
    setDeleting(true);
    setDeleteId(id);
    promise(pipelineAction.removeNot(id))
      .then(() => {
        reloadPatient();
      })
      .finally(() => {
        setDeleting(false);
      });
  };
  return (
    <NotesWrapper as={Box}>
      {notes?.map((note: NoteModel) => {
        return (
          <div key={note.pk}>
            <Box marginLeft="28px" marginBottom="20px">
              <Flex justifyContent="space-between">
                <Text weight="700" fontSize="14px" color="black2">
                  {moment(note?.created_at).format('MMMM YYYY')}
                </Text>
                <Box className="has-cursor" onClick={() => onDelete(note.pk)}>
                  {deletting && deleteId === note.pk ? (
                    <SpinnerView height="10px" />
                  ) : (
                    <TrashIcon />
                  )}
                </Box>
              </Flex>
            </Box>

            <PatientCardNoteItem note={note} />
          </div>
        );
      })}
    </NotesWrapper>
  );
};

export default PatientCardNotes;
