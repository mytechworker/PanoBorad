import axios from 'axios';
import Cookies from 'js-cookie';

const AxiosHelper = ({ token, ...params }: any) => {
  const authorization = token || Cookies.get('access_token_pb');

  const header = authorization
    ? {
        Authorization: `Bearer ${authorization}`,
        'accept-language': 'en',
      }
    : {
        'accept-language': 'en',
      };

  const data = {
    method: 'get',
    headers: header,
    ...params,
  };

  if (process.env.REACT_APP_BASE_URL_API)
    data.baseURL = `${process.env.REACT_APP_BASE_URL_API}`;

  return axios(data);
};

export default AxiosHelper;
