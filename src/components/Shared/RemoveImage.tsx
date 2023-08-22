import React from 'react';

import { Button, Flex } from 'components';
type Props = {
  onRemovePhoto: () => void;
};

const RemoveImage = ({ onRemovePhoto }: Props) => {
  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        flexGap="9px"
        marginBottom="9px"
      >
        <Button
          type="tertiary"
          size="small"
          shape="outline"
          onClick={onRemovePhoto}
        >
          Remove Photo
        </Button>
      </Flex>
    </>
  );
};

export default RemoveImage;
