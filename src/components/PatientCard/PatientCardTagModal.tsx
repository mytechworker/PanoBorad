import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';
import { pipelineAction } from 'redux/actions';
import { usePromise } from 'hooks';
import {
  Flex,
  Modal,
  PatientCardTagList,
  PatientCardAddNewTag,
  Title5,
} from 'components';

import ArrowLeft from '../../assets/images/chervon-left.svg';
type Props = {
  onCancel: () => void;
  visible: boolean;
  tags?: any;
  selectedTags?: any;
  onClickTag: any;
};

const PatientCardTagModal = ({
  visible,
  onCancel,
  tags,
  selectedTags,
  onClickTag,
}: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);
  const promise = usePromise();
  const [createStep, setCreateStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [selectedTag, setSelectedTag] = useState({
    pk: 0,
    title: '',
    color: '',
  });
  const handleCreateTag = (title: any, color: any) => {
    setSubmitting(true);
    if (selectedTag.pk > 0) {
      location &&
        promise(
          pipelineAction.updateTag(selectedTag?.pk, {
            title: title,
            color: color,
            location: location.pk,
          })
        )
          .then(() => {
            setSelectedTag({
              pk: 0,
              title: '',
              color: '',
            });
            promise(
              pipelineAction.loadAllTags({
                page: 1,
                page_size: '50',
              })
            ).finally(() => {
              setCreateStep(1);
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
    } else {
      location &&
        promise(
          pipelineAction.createTag({
            title: title,
            color: color,
            location: location.pk,
          })
        )
          .then(() => {
            promise(
              pipelineAction.loadAllTags({
                page: 1,
                page_size: '50',
              })
            ).finally(() => {
              setCreateStep(1);
            });
          })
          .finally(() => {
            setSubmitting(false);
          });
    }
  };

  return (
    <Modal
      visible={visible}
      closable={true}
      footer={false}
      centered
      destroyOnClose
      width="572px"
      onCancel={() => onCancel()}
      closeIcon
      zIndex={1200}
      title={
        createStep === 1 ? (
          'Tags'
        ) : (
          <Flex flexDirection="row" justifyContent="end">
            <img
              src={ArrowLeft}
              alt=""
              onClick={() => {
                setCreateStep(1);
                setSelectedTag({
                  pk: 0,
                  title: '',
                  color: '',
                });
              }}
              className="has-cursor"
            />
            <Title5 marginLeft="5px">
              {selectedTag.pk > 0 ? 'Update Tag' : 'Create Tag'}
            </Title5>
          </Flex>
        )
      }
    >
      {createStep === 1 && (
        <PatientCardTagList
          createTag={() => setCreateStep(2)}
          list={tags}
          selectedTags={selectedTags}
          onClickTag={onClickTag}
          onEditTag={(tag: any) => {
            setSelectedTag(tag);
            setCreateStep(2);
          }}
        />
      )}
      {createStep === 2 && (
        <PatientCardAddNewTag
          onSubmit={handleCreateTag}
          onBack={() => setCreateStep(1)}
          loading={submitting}
          tag={selectedTag}
        />
      )}
    </Modal>
  );
};
export default PatientCardTagModal;
