import { create } from 'apisauce';
import { keys } from '../common';

const baseURL = import.meta.env.VITE_BACKEND_URL;

const client = create({
  baseURL,
});

client.addAsyncRequestTransform(async (request) => {
  const token = localStorage.getItem(keys.jwttoken);

  if (!token) {
    return;
  }

  request.headers['Authorization'] = `${token}`;
});

export const config = async () => {
  const token = localStorage.getItem(keys.jwttoken);

  return {
    headers: {
      Authorization: `${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

export const authConfig = async (token) => {
  return {
    headers: {
      Authorization: `${token}`,
      Accept: 'application/json',
    },
  };
};

export const multipartConfig = async () => {
  const token = localStorage.getItem(keys.jwttoken);

  return {
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'multipart/form-data',
    },
  };
};

export const blobConfig = async () => {
  const token = localStorage.getItem(keys.jwttoken);

  return {
    headers: {
      Authorization: `${token}`,
      Accept: '*/*',
      responseType: 'arraybuffer',
    },
  };
};

// const responseMonitor = (response) => {
//   if (response.status === 401) {
//     localStorage.clear();
//     window.location.href = '/';
//   }
// };

// client.addMonitor(responseMonitor);

export default client;
