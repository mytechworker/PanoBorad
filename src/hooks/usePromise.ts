import { useDispatch } from 'react-redux';

import { DispatchHelper } from 'helpers';

const usePromise = () => {
  const dispatch = useDispatch();

  return (args: any) => DispatchHelper(dispatch, args);
};

export default usePromise;
