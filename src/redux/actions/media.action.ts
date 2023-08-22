import ActionTypes from '../actionTypes';

export function mediaUpload(data: any) {
  return {
    method: 'post',
    type: ActionTypes.MEDIA_UPLOAD,
    url: '/media/upload',
    data,
  };
}
