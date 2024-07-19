// src/utils/axiosInstance.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { NextPageContext } from 'next';

const baseURL = 'https://beta.lms-api.callgtcindia.com/v1'; // Replace with your API base URL

let axiosInstance: AxiosInstance;

// Function to create and configure a new Axios instance
function createInstance(ctx?: NextPageContext): AxiosInstance {
  const config: AxiosRequestConfig = {
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // For SSR, set cookies from request headers
  if (ctx && ctx.req) {
    const { headers } = ctx.req;
    if (headers.cookie && config.headers) {
      config.headers.cookie = headers.cookie;
    }
  }

  const instance = axios.create(config);

  // Request interceptor to add the token to every request
  instance.interceptors.request.use(
    (reqConfig) => {
      const token = getToken(ctx);
      if (token) {
        reqConfig.headers.Authorization = `Bearer ${token}`;
      }
      return reqConfig;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor (optional) for global error handling
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
}

// Function to retrieve the authentication token
function getToken(ctx?: NextPageContext): string | undefined {
  // For SSR, use `js-cookie` to retrieve the token from cookies
  return Cookies.get('token');
}

// Export a singleton instance of Axios for usage throughout the app
export function getAxiosInstance(ctx?: NextPageContext): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = createInstance(ctx);
  }
  return axiosInstance;
}

export default getAxiosInstance;
