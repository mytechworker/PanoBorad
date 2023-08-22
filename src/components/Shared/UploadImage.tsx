import React, { useState } from 'react';
import { Upload, message } from 'antd';

import { Button, Flex } from 'components';
import { MediaResponse } from 'types';
import { mediaAction } from 'redux/actions';
import { usePromise } from 'hooks';

type Props = {
  validTypeList?: string[];
  multiple?: boolean;
  onSuccessUpload: (mediaInfo: MediaResponse) => void;
};
const UploadImage = ({
  validTypeList = ['image/png', 'image/jpeg', 'image/ipg'],
  onSuccessUpload,
  multiple = false,
}: Props) => {
  const promise = usePromise();
  const [loading, setloading] = useState(false);
  const handleUpdloadImage = (data: any) => {
    setloading(true);
    const formData = new FormData();
    formData.append('media', data.file);
    promise(mediaAction.mediaUpload(formData))
      .then((result: any) => onSuccessUpload(result))
      .finally(() => setloading(false));
  };
  const props = {
    name: 'file',
    multiple,
    beforeUpload: (file: any) => {
      if (!validTypeList.includes(file.type)) {
        message.error(`${file.name} is not a valid type file`);
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    customRequest: ({ onProgress, onSuccess, onError, ...data }: any) =>
      handleUpdloadImage(data),
    showUploadList: false,
    onChange(info: any) {
      const { status } = info.file;
      if (status !== 'uploading') {
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        flexGap="9px"
        marginBottom="9px"
      >
        <Upload {...props}>
          <Button
            type="tertiary"
            size="small"
            shape="outline"
            loading={loading}
          >
            Upload Photo
          </Button>
        </Upload>
      </Flex>
    </>
  );
};

export default UploadImage;
