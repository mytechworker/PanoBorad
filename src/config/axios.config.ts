import axios from 'axios';
import { errorNotification, handleNoNotification } from 'helpers';
import Cookies from 'js-cookie';
import jwt_decode, { JwtPayload } from 'jwt-decode';

const whitleList: string[] = ['/auth/login/email'];

const accessToken = Cookies.get('access_token_pb');
const refreshToken = Cookies.get('refresh_token_pb');
const expires = Cookies.get('expires_access_token_pb') || 0;

let isRefreshingToken: boolean = false;

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_API;
axios.defaults.withCredentials = true;

const isTokenExpired = (): boolean => {
  try {
    const tokenExpireTimestamp: number = new Date(expires).getTime();
    if (tokenExpireTimestamp < 1) return true;

    if (isNaN(tokenExpireTimestamp)) return true;

    const now: number = new Date().getTime();

    return now > tokenExpireTimestamp - 3000;
  } catch (_) {
    return true;
  }
};

export const logoutUser = (): void => {
  Cookies.remove('access_token_pb');
  Cookies.remove('refresh_token_pb');
  localStorage.removeItem('persist:root');
  setTimeout(() => {
    window.location.pathname = '/auth/login';
  }, 100);
};

axios.interceptors.request.use(
  (config: any) => {
    try {
      if (typeof window !== undefined) {
        // check if there isn't need to refresh token
        if (!isTokenExpired()) return config;

        // check the call is related to get refresh token or the other public APIs.
        //@ts-ignore

        if (WHITE_LIST.some((item) => config.url.includes(item))) return config;

        // if (isTokenExpired()) logoutUser();
        // if (!Cookies.get('refresh_token_pb')) logoutUser();

        let newConfig = { ...config };

        // if (isRefreshingToken) {
        //   newConfig.headers.Authorization =
        //     await getFreshTokenFromOtherThread();
        // } else {
        //   newConfig.headers.Authorization = await getFreshTokenDirectly();
        // }

        isRefreshingToken = false;
        return newConfig;
      }
    } catch (_) {
      return config;
    }
  },
  (error) => {
    // request error
    isRefreshingToken = false;
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response?.status < 300) return response;
    return Promise.reject('An error occurred.');
  },
  (error) => {
    let response = error && error.response;
    if (error?.config.url && !handleNoNotification(error.config.url))
      if (response) {
        // Request made and server responded
        // console.log(response.data.error)
        // openNotification(`Error ${response.status}`, `${response?.data?.error ? response?.data?.error : "Not valid user, Please login"}`);
        if (error.response.status === 401) {
          return logoutUser();
          // Todo: Remove cookie if the url was refresh
        }
        errorNotification(error.response);
        // console.log(response?.data?.code)
        // console.log(response?.data?.message)
        return Promise.reject(error.response);
      } else if (error.request) {
        // The request was made but no response was received
        // console.log(error.request);
        return Promise.reject(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        // console.log('Error', error.message);
        return Promise.reject(error.message);
      }
  }
);

// import axios, { AxiosRequestConfig } from 'axios';
// import jwt_decode, { JwtPayload } from 'jwt-decode';
// import Cookies from 'js-cookie';

// import { AxiosHelper } from '../helpers';

// const WHITE_LIST: string[] = ['/auth/login/email', 'countries', 'assets'];

// let isRefreshingToken: boolean = false; // this is lock! :D
// const FETCH_TOKEN_TIMEOUT: number = 3000;
// const CHECK_TOKEN_INTERVAL: number = 500;
// const accessToken = Cookies.get('access_token_pb') ?? '';
// const refreshToken = Cookies.get('refresh_token_pb') ?? '';

// const isTokenExpired = (): boolean => {
//   try {
//     const expires = jwt_decode<JwtPayload>(accessToken).exp ?? 0;
//     const tokenExpireTimestamp: number = new Date(expires).getTime();
//     console.log(tokenExpireTimestamp);

//     if (isNaN(tokenExpireTimestamp)) return true;

//     const now: number = new Date().getTime();

//     return now > tokenExpireTimestamp - 3000;
//   } catch (_) {
//     return true;
//   }
// };

// const logout = (): void => {
//   Cookies.remove('access_token_pb');
//   Cookies.remove('refresh_token_pb');
//   window.location.pathname = '/auth/login';
// };

// /**
//  * call refresh token api, set new cookies and return new token
//  */
// const getFreshTokenDirectly = async (): Promise<string> => {
//   if (refreshToken) {
//     try {
//       isRefreshingToken = true;
//       const { data: refreshData } = await AxiosHelper({
//         url: '/auth/token/refresh',
//         method: 'post',
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//         data: {
//           refreshToken: Cookies.get('refresh_token_pb'),
//         },
//       });

//       console.log(refreshData);
//       const expires = jwt_decode<JwtPayload>(refreshData.access).exp;
//       Cookies.set('access_token_pb', refreshData.access, { expires });
//       Cookies.set('refresh_token_pb', refreshData.refresh);

//       return `Bearer ${refreshData?.data?.payload?.token}`;
//     } catch (e) {
//       isRefreshingToken = false;
//       logout();
//       throw new axios.Cancel(
//         `Retrieving new token failed! There is a problem to fetch new token: ${e}`
//       );
//     }
//   } else {
//     logout();
//     throw new axios.Cancel(
//       `Retrieving new token failed! Because There isn't any refresh token`
//     );
//   }
// };

// /**
//  * will be used when another axios request (thread) is fetching new token using the above function.
//  * then, this axios request (thread) will wait for the other thread and when new token arrived,
//  * returns the fresh token from updated cookies
//  */
// const getFreshTokenFromOtherThread = async (): Promise<string> => {
//   let waitedTime: number = 0;
//   let intervalId: ReturnType<typeof setInterval>;

//   const clearTokenInterval = () => {
//     if (intervalId) clearInterval(intervalId);
//     waitedTime = 0;
//   };

//   try {
//     await new Promise((resolve, reject) => {
//       intervalId = setInterval(() => {
//         if (waitedTime >= FETCH_TOKEN_TIMEOUT) {
//           clearTokenInterval();
//           reject(`Couldn't wait for new token anymore`);
//         }

//         waitedTime += CHECK_TOKEN_INTERVAL;

//         if (!isTokenExpired()) {
//           clearTokenInterval();
//           resolve(`New token successfully taken`);
//         }
//       }, CHECK_TOKEN_INTERVAL);
//     });
//   } catch (e) {
//     console.log(e);
//   } finally {
//     return `Bearer ${Cookies.get('access_token_pb')}`;
//   }
// };

// axios.interceptors.request.use(
//   //@ts-ignore
//   async (config: AxiosRequestConfig) => {
//     try {
//       console.log('isTokenExpired', isTokenExpired);
//       if (typeof window !== undefined) {
//         // check if there isn't need to refresh token
//         if (!isTokenExpired()) return config;

//         // check the call is related to get refresh token or the other public APIs.
//         //@ts-ignore

//         if (WHITE_LIST.some((item) => config.url.includes(item))) return config;

//         let newConfig = { ...config };

//         if (isRefreshingToken) {
//           newConfig.headers.Authorization =
//             await getFreshTokenFromOtherThread();
//         } else {
//           newConfig.headers.Authorization = await getFreshTokenDirectly();
//         }

//         isRefreshingToken = false;
//         return newConfig;
//       }
//     } catch (_) {
//       return config;
//     }
//   },
//   (error) => {
//     // request error
//     isRefreshingToken = false;
//     return Promise.reject(error);
//   }
// );
